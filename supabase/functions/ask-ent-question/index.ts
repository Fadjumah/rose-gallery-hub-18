import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, question } = await req.json();
    
    if (!name || !phone || !question) {
      return new Response(
        JSON.stringify({ error: 'Name, phone, and question are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert question into database first
    const { data: questionData, error: insertError } = await supabase
      .from('ent_questions')
      .insert({ name, phone, question })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting question:', insertError);
      throw new Error('Failed to save question');
    }

    console.log('Question saved, generating AI response...');

    // Generate AI response using GPT-5 via Lovable AI Gateway
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-5',
        messages: [
          {
            role: 'system',
            content: `You are a helpful and professional ENT (Ear, Nose, and Throat) specialist assistant for Eritage ENT Care in Entebbe, Uganda. 
            
Your role is to:
- Provide helpful, accurate information about common ENT conditions
- Answer general health questions related to ears, nose, throat, hearing, balance, and related issues
- Be warm, professional, and reassuring
- Always recommend booking an appointment for proper diagnosis and treatment
- Never provide specific medical diagnoses or treatment plans
- Mention that the clinic offers hearing tests (PTA, Tympanometry, OAE, ABR)
- Include contact info: +256 740 166 778 for appointments
- Keep responses concise but informative (2-3 paragraphs max)

Important: Always emphasize that your advice is general guidance and professional consultation is recommended.`
          },
          {
            role: 'user',
            content: `Patient Name: ${name}\nQuestion: ${question}`
          }
        ],
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI Gateway error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Service is busy. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Service temporarily unavailable. Please try again later.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error('Failed to generate AI response');
    }

    const aiData = await aiResponse.json();
    const generatedResponse = aiData.choices?.[0]?.message?.content || 'Thank you for your question. Please call us at +256 740 166 778 for assistance.';

    console.log('AI response generated, updating database...');

    // Update the question with AI response
    const { error: updateError } = await supabase
      .from('ent_questions')
      .update({ 
        ai_response: generatedResponse,
        responded_at: new Date().toISOString()
      })
      .eq('id', questionData.id);

    if (updateError) {
      console.error('Error updating response:', updateError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        response: generatedResponse,
        questionId: questionData.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ask-ent-question function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
