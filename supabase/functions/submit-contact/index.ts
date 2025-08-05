import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'
import { Resend } from 'npm:resend@2.0.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactMessage {
  name: string
  email: string
  message: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Parse request body
    const { name, email, message }: ContactMessage = await req.json()

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, message' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Insert contact message into database
    const { data, error: insertError } = await supabaseClient
      .from('contact_messages')
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim()
      })
      .select()

    if (insertError) {
      console.error('Database insert error:', insertError)
      return new Response(
        JSON.stringify({ error: 'Failed to save message' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Initialize Resend client
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

    // Send notification email to me
    try {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['pallabm2024@gmail.com'],
        subject: `New Contact Form Message from ${name.trim()}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>From:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim().toLowerCase()}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #2563eb; padding-left: 16px; margin: 16px 0; background: #f8fafc; padding: 16px; border-radius: 8px;">
            ${message.trim().replace(/\n/g, '<br>')}
          </blockquote>
          <p style="color: #6b7280; font-size: 14px;">Reply directly to this email to respond to ${name.trim()}.</p>
        `,
        reply_to: email.trim().toLowerCase(),
      })
      console.log('Notification email sent to pallabm2024@gmail.com')
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError)
    }

    // Send auto-reply email
    try {
      await resend.emails.send({
        from: 'Pallab <onboarding@resend.dev>',
        to: [email.trim().toLowerCase()],
        subject: 'Thank you for contacting me!',
        html: `
          <h1>Hi ${name.trim()},</h1>
          <p>Thank you for reaching out! I've received your message and will get back to you within 12 hours.</p>
          <p>Here's a copy of your message:</p>
          <blockquote style="border-left: 4px solid #e5e7eb; padding-left: 16px; margin: 16px 0; color: #6b7280;">
            ${message.trim().replace(/\n/g, '<br>')}
          </blockquote>
          <p>Best regards,<br>Pallab</p>
        `,
      })
      console.log('Auto-reply email sent successfully')
    } catch (emailError) {
      console.error('Failed to send auto-reply email:', emailError)
      // Don't fail the request if email fails, just log the error
    }

    console.log('Contact message received:', { name, email, messageLength: message.length })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Your message has been sent successfully!' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})