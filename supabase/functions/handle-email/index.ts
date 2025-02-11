
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from '@supabase/supabase-js'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Email handler function called');
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    let recipient, sender, subject, bodyPlain;

    // Check content type to handle both form data and JSON
    const contentType = req.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (contentType?.includes('application/json')) {
      // Handle JSON data
      const jsonData = await req.json();
      console.log('Received JSON data:', jsonData);
      
      // For testing purposes, return early with the data we received
      return new Response(
        JSON.stringify({ received: jsonData }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    } else if (contentType?.includes('multipart/form-data') || contentType?.includes('application/x-www-form-urlencoded')) {
      // Handle form data
      const formData = await req.formData()
      console.log('Received form data:', Object.fromEntries(formData.entries()));
      
      recipient = formData.get('recipient') as string
      sender = formData.get('sender') as string
      subject = formData.get('subject') as string
      bodyPlain = formData.get('body-plain') as string

      if (!recipient || !sender || !subject || !bodyPlain) {
        console.error('Missing required fields in form data');
        return new Response(
          JSON.stringify({ 
            error: 'Missing required fields',
            received: Object.fromEntries(formData.entries())
          }),
          { 
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }
    } else {
      console.error('Unsupported content type:', contentType);
      return new Response(
        JSON.stringify({ error: 'Unsupported content type' }),
        { 
          status: 415,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Parsed email data:', {
      to: recipient,
      from: sender,
      subject: subject,
      bodyLength: bodyPlain?.length
    })

    // Extract the local part of the email address (before @)
    const to = recipient.split('@')[0]
    console.log('Looking for address with local part:', to);

    // Find the address record
    const { data: address, error: addressError } = await supabase
      .from('addresses')
      .select('id')
      .eq('email', `${to}@tenminuteemails.com`)
      .single()

    if (addressError) {
      console.error('Address lookup error:', addressError);
      return new Response(
        JSON.stringify({ error: 'Address not found', details: addressError }),
        { 
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!address) {
      console.error('No address found for:', to);
      return new Response(
        JSON.stringify({ error: 'Address not found' }),
        { 
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Found address:', address);

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
      console.error('Error storing message:', insertError);
      throw insertError
    }

    console.log('Message stored successfully');

    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error processing email:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
