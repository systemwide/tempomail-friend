import PostalMime from "postal-mime";

interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
}

function supabaseHeaders(env: Env): Record<string, string> {
  return {
    apikey: env.SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
    "Content-Type": "application/json",
  };
}

export default {
  async email(
    message: ForwardableEmailMessage,
    env: Env,
    ctx: ExecutionContext
  ): Promise<void> {
    const recipient = message.to;
    const sender = message.from;

    console.log(`Incoming email from=${sender} to=${recipient}`);

    try {
      // Look up recipient address that exists and has not expired
      const addressUrl =
        `${env.SUPABASE_URL}/rest/v1/addresses` +
        `?email=eq.${encodeURIComponent(recipient)}` +
        `&expires_at=gt.${encodeURIComponent(new Date().toISOString())}` +
        `&select=id` +
        `&limit=1`;

      const addressRes = await fetch(addressUrl, {
        headers: supabaseHeaders(env),
      });

      if (!addressRes.ok) {
        console.error(
          `Address lookup failed: ${addressRes.status} ${await addressRes.text()}`
        );
        message.setReject("Temporary error, try again later");
        return;
      }

      const addresses: { id: string }[] = await addressRes.json();

      if (addresses.length === 0) {
        console.log(`No active mailbox for ${recipient}, rejecting`);
        message.setReject("Mailbox not found");
        return;
      }

      const addressId = addresses[0].id;

      // Parse raw email with postal-mime
      const rawEmail = await new Response(message.raw).arrayBuffer();
      const parsed = await new PostalMime().parse(rawEmail);

      const subject = parsed.subject ?? "(no subject)";
      const body = parsed.text ?? parsed.html ?? "";

      // Insert message into Supabase
      const messageRes = await fetch(`${env.SUPABASE_URL}/rest/v1/messages`, {
        method: "POST",
        headers: {
          ...supabaseHeaders(env),
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          address_id: addressId,
          sender,
          subject,
          body,
          received_at: new Date().toISOString(),
        }),
      });

      if (!messageRes.ok) {
        console.error(
          `Message insert failed: ${messageRes.status} ${await messageRes.text()}`
        );
        return;
      }

      const messages: { id: string }[] = await messageRes.json();
      const messageId = messages[0].id;

      console.log(`Stored message ${messageId} for address ${addressId}`);

      // Process attachments
      if (parsed.attachments && parsed.attachments.length > 0) {
        for (const attachment of parsed.attachments) {
          const filename =
            attachment.filename ?? `attachment-${Date.now()}`;
          const contentType =
            attachment.mimeType ?? "application/octet-stream";
          const content = attachment.content;
          const storagePath = `${messageId}/${filename}`;

          try {
            // Upload to Supabase Storage
            const uploadUrl =
              `${env.SUPABASE_URL}/storage/v1/object/email-attachments/${storagePath}`;

            const uploadRes = await fetch(uploadUrl, {
              method: "POST",
              headers: {
                apikey: env.SUPABASE_SERVICE_ROLE_KEY,
                Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
                "Content-Type": contentType,
              },
              body: content,
            });

            if (!uploadRes.ok) {
              console.error(
                `Attachment upload failed for ${filename}: ${uploadRes.status} ${await uploadRes.text()}`
              );
              continue;
            }

            // Insert attachment metadata
            const attachRes = await fetch(
              `${env.SUPABASE_URL}/rest/v1/attachments`,
              {
                method: "POST",
                headers: supabaseHeaders(env),
                body: JSON.stringify({
                  message_id: messageId,
                  filename,
                  content_type: contentType,
                  size: content.byteLength,
                  storage_path: storagePath,
                }),
              }
            );

            if (!attachRes.ok) {
              console.error(
                `Attachment metadata insert failed for ${filename}: ${attachRes.status} ${await attachRes.text()}`
              );
              continue;
            }

            console.log(`Stored attachment: ${filename} (${content.byteLength} bytes)`);
          } catch (err) {
            console.error(`Error processing attachment ${filename}:`, err);
          }
        }
      }
    } catch (err) {
      console.error("Unhandled error in email handler:", err);
      message.setReject("Internal processing error");
    }
  },
};
