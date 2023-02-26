import CryptoJS from 'crypto-js';
import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';

export const docApi_createDocumentPassword = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  _user_id: string
) => {
  // Extract data from body
  const { password2, id } = JSON.parse(req.body);

  const { data: data_GET, error: error_GET } = await supabaseServerClient
    .from('documents')
    .select('html, password')
    .match({ id });

  // Handle error_GET
  if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

  // Hash password
  const passwordHash = await argon2.hash(password2);

  // Decrypt html
  const bytes = CryptoJS.AES.decrypt(data_GET[0].html, process.env.DEFAULT_ENCRYPTION_KEY);
  const originalHtml = bytes.toString(CryptoJS.enc.Utf8);

  // Encrypt html
  const ciphertext = CryptoJS.AES.encrypt(originalHtml, password2).toString();

  // Handle update password
  const { error } = await supabaseServerClient
    .from('documents')
    .update({ password: passwordHash, html: ciphertext, updated_at: dayjs().toString() })
    .match({ id });

  // Handle error
  if (error) return res.status(400).json({ error: true, message: error.message, data: null });

  res.status(200).json({ error: false, message: 'Document password was successfully created', data: null });
};
