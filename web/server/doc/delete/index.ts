import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const docApi_deleteDocument = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  // Extract data from body
  const { id } = JSON.parse(req.body);

  const { data: data_DELETE, error: error_DELETE } = await supabaseServerClient
    .from('documents')
    .delete()
    .match({ id });

  // Handle error_DELETE
  if (error_DELETE) return res.status(400).json({ error: true, message: error_DELETE.message, data: null });

  res.status(200).json({ error: false, message: 'Document was successfully deleted', data: data_DELETE });
};
