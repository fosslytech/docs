import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const docApi_selectDocument = async (
  _req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  const { data: data_GET, error: error_GET } = await supabaseServerClient
    .from('documents')
    .select('id, name, ext, password, created_at, updated_at')
    .match({ user_id })
    .order('updated_at', { ascending: false });

  // Handle error_GET
  if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

  res.status(200).json({ error: false, message: 'Documents retrieved', data: data_GET });
};
