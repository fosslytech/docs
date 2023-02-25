import CryptoJS from 'crypto-js';
import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';

export const docApi_updateDocumentName = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  _user_id: string
) => {
  // Extract data from body
  const { name, id } = JSON.parse(req.body);

  const { error } = await supabaseServerClient
    .from('documents')
    .update({ name, updated_at: dayjs().toString() })
    .match({ id });

  // Handle error
  if (error) return res.status(400).json({ error: true, message: error.message, data: null });

  res.status(200).json({ error: false, message: 'Document name was successfully updated', data: null });
};
