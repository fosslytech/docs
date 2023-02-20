import CryptoJS from 'crypto-js';
import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';

export const sbApi_updateDocument = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  // Extract data from body
  const { name, password, id } = JSON.parse(req.body);

  // Handle update name
  if (name) {
    const { error } = await supabaseServerClient
      .from('documents')
      .update({ name, updated_at: dayjs().toString() })
      .match({ id });
    // Handle error
    if (error) return res.status(400).json({ error: true, message: error.message, data: null });
  }

  // Handle update password
  if (password) {
    const { data: data_GET, error: error_GET } = await supabaseServerClient
      .from('documents')
      .select('html')
      .match({ id });

    // Handle error_GET
    if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

    // Hash password
    const passwordHash = await argon2.hash(password);

    // Decrypt html
    const bytes = CryptoJS.AES.decrypt(data_GET[0].html, user_id);
    var originalHtml = bytes.toString(CryptoJS.enc.Utf8);

    // Encrypt html
    const ciphertext = CryptoJS.AES.encrypt(originalHtml, password).toString();

    const { error } = await supabaseServerClient
      .from('documents')
      .update({ password: passwordHash, html: ciphertext, updated_at: dayjs().toString() })
      .match({ id });

    // Handle error
    if (error) return res.status(400).json({ error: true, message: error.message, data: null });
  }

  res.status(200).json({ error: false, message: 'Your document was successfully updated', data: null });
};
