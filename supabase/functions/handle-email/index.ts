
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const body = await req.json()
    console.log('Received email:', body)

    const { from, to, subject, text } = body

    // Find the address record
    const { data: address, error: addressError } = await supabase
      .from('addresses')
      .select('id')
      .eq('email', to)
      .single()

    if (addressError || !address) {
      console.error('Address not found:', to)
      return new Response(
        JSON.stringify({ error: 'Address not found' }),
        { 
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Store the message
    const { error: insertError } = await supabase
      .from('messages')
      .insert({
        address_id: address.id,
        sender: from,
        subject: subject,
        body: text,
        received_at: new Date().toISOString()
      })

    if (insertError) {
      console.error('Error storing message:', insertError)
      throw insertError
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error processing email:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
