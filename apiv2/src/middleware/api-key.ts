import { BeforeRequestHandler } from 'elysia';

import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_ANON_KEY || '');

export const middlewareApiKey: BeforeRequestHandler = async (ctx) => {
  const { request } = ctx;

  const apiKey = request.headers.get('x-api-key');

  const { data } = await supabase.from('api_keys').select('id').match({ key: apiKey });

  if (!data?.length)
    return new Response(JSON.stringify({ error: true, message: 'Unauthorized', data: null }), {
      status: 401,
    });
};
