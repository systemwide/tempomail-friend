
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { text, targetLang } = await req.json()

    if (!text || !targetLang) {
      throw new Error('Missing required parameters')
    }

    // Using MyMemory API for demonstration
    // In production, you'd want to use a more robust service like Google Translate
    const url = new URL('https://api.mymemory.translated.net/get')
    url.searchParams.append('q', text)
    url.searchParams.append('langpair', `en|${targetLang}`)

    const response = await fetch(url.toString())
    const data = await response.json()

    if (!response.ok) {
      throw new Error('Translation service error')
    }

    return new Response(
      JSON.stringify({
        translatedText: data.responseData.translatedText,
        originalText: text,
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        } 
      }
    )
  } catch (error) {
    console.error('Translation error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        }
      }
    )
  }
})
