import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

console.info("email handler function starting");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const url = Deno.env.get("SUPABASE_URL") ?? "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

  if (!url || !serviceKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    return json({ error: "Server misconfiguration" }, 500);
  }

  const supabase = createClient(url, serviceKey);

  try {
    const contentType = req.headers.get("content-type") ?? "";
    let recipient: string | undefined;
    let sender: string | undefined;
    let subject: string | undefined;
    let bodyPlain: string | undefined;

    if (contentType.includes("application/json")) {
      const jsonData = await req.json();
      recipient = jsonData?.recipient?.trim();
      sender = jsonData?.sender?.trim();
      subject = jsonData?.subject?.trim();
      bodyPlain = jsonData?.["body-plain"]?.trim() ?? jsonData?.bodyPlain?.trim();
    } else if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      const formData = await req.formData();
      recipient = (formData.get("recipient") as string | null)?.trim();
      sender = (formData.get("sender") as string | null)?.trim();
      subject = (formData.get("subject") as string | null)?.trim();
      bodyPlain = (formData.get("body-plain") as string | null)?.trim()
        ?? (formData.get("bodyPlain") as string | null)?.trim();
    } else {
      return json({ error: "Unsupported content type" }, 415);
    }

    if (!recipient || !sender || !subject || !bodyPlain) {
      return json(
        { error: "Missing required fields", received: { recipient, sender, subject, bodyPlain } },
        400,
      );
    }

    const toLocal = recipient.split("@")[0];

    const { data: address, error: addressError } = await supabase
      .from("addresses")
      .select("id")
      .eq("email", `${toLocal}@tenminuteemails.com`)
      .maybeSingle();

    if (addressError) {
      console.error("Address lookup error:", addressError);
      return json({ error: "Address lookup failed", details: addressError.message }, 404);
    }

    if (!address) {
      return json({ error: "Address not found" }, 404);
    }

    const { error: insertError } = await supabase.from("messages").insert({
      address_id: address.id,
      sender,
      subject,
      body: bodyPlain,
      received_at: new Date().toISOString(),
    });

    if (insertError) {
      console.error("Error storing message:", insertError);
      return json({ error: "Insert failed", details: insertError.message }, 500);
    }

    return json({ success: true }, 200);
  } catch (err: any) {
    console.error("Unhandled error:", err);
    return json({ error: "Internal error", details: String(err?.message ?? err) }, 500);
  }
});
