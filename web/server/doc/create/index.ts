import AES from 'crypto-js/aes';
import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const docApi_createDocument = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  // Extract data from body
  const { ext, html, name, password } = JSON.parse(req.body);

  const { data: data_GET, error: error_GET } = await supabaseServerClient
    .from('documents')
    .select('id')
    .match({ user_id });

  // Handle error_GET
  if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

  // Max 25 documents per account
  if (data_GET.length >= 25)
    return res.status(400).json({ error: true, message: 'Document limit reached', data: null });

  const encriptionKey = password || process.env.DEFAULT_ENCRYPTION_KEY;

  // Encrypt html
  const ciphertext = AES.encrypt(html, encriptionKey).toString();
  // Hash password
  const passwordHash = password ? await argon2.hash(password) : '';

  // Don't allow too large documents
  if (ciphertext.length > 30000)
    return res.status(400).json({ error: true, message: 'Your document is too long', data: null });

  const { data: data_POST, error: error_POST } = await supabaseServerClient
    .from('documents')
    .insert({ name, ext, html: ciphertext, password: passwordHash, user_id: user_id })
    .select('id');

  // Handle error_POST
  if (error_POST) return res.status(400).json({ error: true, message: error_POST.message, data: null });

  res
    .status(200)
    .json({ error: false, message: 'Your document was successfully created', data: data_POST[0].id });
};
