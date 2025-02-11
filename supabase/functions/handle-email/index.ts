
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const formData = await req.formData()
    
    // Extract email data from Mailgun's format
    const recipient = formData.get('recipient') as string
    const sender = formData.get('sender') as string
    const subject = formData.get('subject') as string
    const bodyPlain = formData.get('body-plain') as string

    console.log('Received email:', {
      to: recipient,
      from: sender,
      subject: subject,
      body: bodyPlain
    })

    // Extract the local part of the email address (before @)
    const to = recipient.split('@')[0]

    // Find the address record
    const { data: address, error: addressError } = await supabase
      .from('addresses')
      .select('id')
      .eq('email', `${to}@tenminuteemails.com`)
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
        sender: sender,
        subject: subject,
        body: bodyPlain,
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
