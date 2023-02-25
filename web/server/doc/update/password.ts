import CryptoJS from 'crypto-js';
import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';

export const docApi_updateDocumentPassword = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  // Extract data from body
  const { password1, password2, id } = JSON.parse(req.body);

  const { data: data_GET, error: error_GET } = await supabaseServerClient
    .from('documents')
    .select('html, password')
    .match({ id });

  // Handle error_GET
  if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

  // Verify password when changing on password protected documents
  if (password1) {
    const passwordMatch = await argon2.verify(data_GET[0].password, password1);

    // Handle invalid password
    if (!passwordMatch)
      return res
        .status(400)
        .json({ error: true, message: 'The password you provided is incorrect', data: null });
  }

  // Hash password
  const passwordHash = await argon2.hash(password2);

  const encriptionKey = password1 || process.env.DEFAULT_ENCRYPTION_KEY;

  // Decrypt html
  const bytes = CryptoJS.AES.decrypt(data_GET[0].html, encriptionKey);
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

  res.status(200).json({ error: false, message: 'Document password was successfully updated', data: null });
};
