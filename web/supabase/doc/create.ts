import AES from 'crypto-js/aes';
import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const sbApi_createDocument = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  // Extract data from body
  const { ext, html, name, password } = JSON.parse(req.body);

  const encriptionKey = password || user_id;

  // Encrypt html
  const ciphertext = AES.encrypt(html, encriptionKey).toString();
  // Hash password
  const passwordHash = password ? await argon2.hash(password) : '';

  // Don't allow too large documents
  if (ciphertext.length > 20000)
    return res.status(400).json({ error: true, message: 'Your document is too long', data: null });

  const { data: data_POST, error: error_POST } = await supabaseServerClient
    .from('documents')
    .insert({ name, ext, html: ciphertext, password: passwordHash, user_id: user_id });

  // Handle error_POST
  if (error_POST) return res.status(400).json({ error: true, message: error_POST.message, data: null });

  res.status(200).json({ error: false, message: 'Your document was successfully uploaded', data: data_POST });
};
