import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const keyApi_deleteApiKey = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  _user_id: string
) => {
  // Extract data from body
  const { id } = JSON.parse(req.body);

  const { data: data_DELETE, error: error_DELETE } = await supabaseServerClient
    .from('api_keys')
    .delete()
    .match({ id });

  // Handle error_DELETE
  if (error_DELETE) return res.status(400).json({ error: true, message: error_DELETE.message, data: null });

  res.status(200).json({ error: false, message: 'API key deleted', data: null });
};
