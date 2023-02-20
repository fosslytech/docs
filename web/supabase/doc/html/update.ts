import AES from 'crypto-js/aes';
import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const sbApi_updateDocumentHtml = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient
) => {
  console.log(req.body);

  // Extract data from body
  const body = JSON.parse(req.body);

  // Handle update name
  if (body?.name) {
    const { name, id } = body;

    const { error } = await supabaseServerClient.from('documents').update({ name }).match({ id });

    // Handle error
    if (error) return res.status(400).json({ error: true, message: error.message, data: null });
  }

  // Handle update password
  if (body?.password) {
    const { password, id } = body;

    // Hash password
    const passwordHash = await argon2.hash(password);

    const { error } = await supabaseServerClient
      .from('documents')
      .update({ password: passwordHash })
      .match({ id });

    // Handle error
    if (error) return res.status(400).json({ error: true, message: error.message, data: null });
  }

  res.status(200).json({ error: false, message: 'Your document was successfully updated', data: null });
};
