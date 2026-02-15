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

const RATE_LIMIT_WINDOW_HOURS = 1;
const MAX_ADDRESSES_PER_HOUR = 5;
const MAX_ACTIVE_ADDRESSES_PER_IP = 3;
const EMAIL_DOMAIN = "tenminuteemails.com";
const EXPIRY_MINUTES = 10;

function generateRandomLocal(length = 6): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  for (const byte of array) {
    result += chars[byte % chars.length];
  }
  return result;
}

function getClientIp(req: Request): string {
  return (
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

console.info("create-address function starting");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const url = Deno.env.get("SUPABASE_URL") ?? "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

  if (!url || !serviceKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    return json({ error: "Server misconfiguration" }, 500);
  }

  const supabase = createClient(url, serviceKey);

  try {
    const body = await req.json().catch(() => ({}));
    const clientIp = getClientIp(req);

    // Turnstile verification (optional — only if secret key is configured)
    const turnstileSecret = Deno.env.get("TURNSTILE_SECRET_KEY");
    if (turnstileSecret) {
      const turnstileToken = body?.turnstileToken;
      if (!turnstileToken) {
        return json({ error: "Turnstile token required" }, 403);
      }

      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
            remoteip: clientIp,
          }),
        },
      );

      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        console.error("Turnstile verification failed:", verifyData);
        return json({ error: "Turnstile verification failed" }, 403);
      }
    }

    // Rate limit check: max addresses created per IP in the last hour
    const windowStart = new Date();
    windowStart.setHours(windowStart.getHours() - RATE_LIMIT_WINDOW_HOURS);

    const { count: recentCount, error: countError } = await supabase
      .from("rate_limits")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", clientIp)
      .gte("created_at", windowStart.toISOString());

    if (countError) {
      console.error("Rate limit check error:", countError);
      return json({ error: "Rate limit check failed" }, 500);
    }

    if ((recentCount ?? 0) >= MAX_ADDRESSES_PER_HOUR) {
      return json(
        { error: "Rate limit exceeded. Maximum 5 addresses per hour." },
        429,
      );
    }

    // Rate limit check: max active (non-expired) addresses per IP
    const now = new Date().toISOString();

    const { count: activeCount, error: activeError } = await supabase
      .from("rate_limits")
      .select("*, addresses!inner(expires_at)", { count: "exact", head: true })
      .eq("ip_address", clientIp)
      .gte("addresses.expires_at", now);

    if (activeError) {
      // If join fails (e.g., before migration adds the FK), fall back gracefully
      console.warn("Active address check error (non-fatal):", activeError);
    } else if ((activeCount ?? 0) >= MAX_ACTIVE_ADDRESSES_PER_IP) {
      return json(
        { error: "Too many active addresses. Please wait for some to expire." },
        429,
      );
    }

    // Generate random email address
    const localPart = generateRandomLocal(6);
    const emailAddress = `${localPart}@${EMAIL_DOMAIN}`;
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + EXPIRY_MINUTES);

    // Insert address
    const { data: address, error: insertError } = await supabase
      .from("addresses")
      .insert({
        email: emailAddress,
        expires_at: expiresAt.toISOString(),
      })
      .select("id, email, expires_at")
      .single();

    if (insertError || !address) {
      console.error("Error creating address:", insertError);
      return json({ error: "Failed to create address", details: insertError?.message }, 500);
    }

    // Record rate limit entry
    const { error: rateLimitError } = await supabase
      .from("rate_limits")
      .insert({
        ip_address: clientIp,
        address_id: address.id,
      });

    if (rateLimitError) {
      console.error("Error recording rate limit:", rateLimitError);
    }

    return json({
      id: address.id,
      email: address.email,
      expires_at: address.expires_at,
    });
  } catch (err: any) {
    console.error("Unhandled error:", err);
    return json({ error: "Internal error", details: String(err?.message ?? err) }, 500);
  }
});
