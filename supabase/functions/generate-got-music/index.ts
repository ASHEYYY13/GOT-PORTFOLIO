// import "https://deno.land/x/xhr@0.1.0/mod.ts";
// import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// const corsHeaders = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
// };

// serve(async (req) => {
//   // Handle CORS preflight requests
//   if (req.method === 'OPTIONS') {
//     return new Response(null, { headers: corsHeaders });
//   }

//   try {
//     const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
//     if (!LOVABLE_API_KEY) {
//       throw new Error('LOVABLE_API_KEY is not configured');
//     }

//     console.log('Generating Game of Thrones style intro music...');

//     // Use Lovable AI to generate a description for epic medieval music
//     const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${LOVABLE_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: 'google/gemini-2.5-flash',
//         messages: [
//           {
//             role: 'system',
//             content: 'You are a music composition assistant. Describe epic, medieval fantasy music in vivid detail.'
//           },
//           {
//             role: 'user',
//             content: 'Describe an epic 10-second intro sound that evokes Game of Thrones - dramatic, medieval, with deep drums and orchestral elements. Just describe the musical elements, no extra text.'
//           }
//         ],
//         max_tokens: 150,
//       }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('AI Gateway error:', errorText);
//       throw new Error(`AI Gateway error: ${response.status}`);
//     }

//     const data = await response.json();
//     const musicDescription = data.choices?.[0]?.message?.content || 'Epic medieval orchestral theme';

//     console.log('Music description generated:', musicDescription);

//     // Return the description - we'll use Web Audio API on the client to create the sound
//     return new Response(
//       JSON.stringify({ 
//         success: true,
//         description: musicDescription,
//         // We'll synthesize audio on the client using Web Audio API
//       }),
//       { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
//     );

//   } catch (error: unknown) {
//     const errorMessage = error instanceof Error ? error.message : 'Unknown error';
//     console.error('Error in generate-got-music function:', errorMessage);
//     return new Response(
//       JSON.stringify({ error: errorMessage }),
//       { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
//     );
//   }
// });
