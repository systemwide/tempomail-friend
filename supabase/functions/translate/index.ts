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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text, targetLang } = await req.json();

    if (!text || !targetLang) {
      return json({ error: "Missing required parameters" }, 400);
    }

    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.append("q", text);
    url.searchParams.append("langpair", `en|${targetLang}`);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (!response.ok) {
      return json({ error: "Translation service error" }, 502);
    }

    return json({
      translatedText: data.responseData.translatedText,
      originalText: text,
    });
  } catch (err: any) {
    console.error("Translation error:", err);
    return json({ error: String(err?.message ?? err) }, 500);
  }
});
