import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const keyApi_selectApiKey = async (
  _req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  const { data: data_GET, error: error_GET } = await supabaseServerClient
    .from('api_keys')
    .select('id, key, created_at')
    .match({ user_id });

  // Handle error_GET
  if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

  const returnData = data_GET.map((k) => ({
    id: k.id,
    created_at: k.created_at,
    key: `${k.key.substr(0, 8)}-****-****-****-************`,
  }));

  res.status(200).json({ error: false, message: 'API keys retrieved', data: returnData });
};
