import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

export const keyApi_createApiKey = async (
  _req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  // Generate key
  const value = uuidv4();

  // Max 3 keys per account
  const { data: data_GET, error: error_GET } = await supabaseServerClient
    .from('api_keys')
    .select('id')
    .match({ user_id });

  // Handle error_GET
  if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

  if (data_GET.length === 3)
    return res.status(400).json({ error: true, message: 'API keys limit reached', data: null });

  const { error: error_POST } = await supabaseServerClient.from('api_keys').insert({ value, user_id });

  // Handle error_POST
  if (error_POST) return res.status(400).json({ error: true, message: error_POST.message, data: null });

  res.status(200).json({ error: false, message: 'Your API key was successfully created', data: value });
};
