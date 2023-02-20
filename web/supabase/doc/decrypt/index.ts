import CryptoJS from 'crypto-js';

import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const sbApi_decryptDocument = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  // Extract data from body
  const { id, password } = JSON.parse(req.body);

  const { data: data_GET, error: error_GET } = await supabaseServerClient
    .from('documents')
    .select('html, password')
    .match({ id });

  // Handle error_GET
  if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

  // Verify password for protected documents
  if (password) {
    const passwordMatch = await argon2.verify(data_GET[0].password, password);

    // Handle invalid password
    if (!passwordMatch)
      return res
        .status(400)
        .json({ error: true, message: "The password you provided isn't correct", data: null });
  }

  const encriptionKey = password || user_id;

  // Decrypt html
  const bytes = CryptoJS.AES.decrypt(data_GET[0].html, encriptionKey);
  var originalHtml = bytes.toString(CryptoJS.enc.Utf8);

  res
    .status(200)
    .json({ error: false, message: 'Your document was successfully decrypted', data: originalHtml });
};
