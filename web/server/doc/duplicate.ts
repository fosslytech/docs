import AES from 'crypto-js/aes';
import argon2 from 'argon2';
import { SupabaseClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

export const docApi_duplicateDocument = async (
  req: NextApiRequest,
  res: NextApiResponse,
  supabaseServerClient: SupabaseClient,
  user_id: string
) => {
  // Extract data from body
  const { id, name } = JSON.parse(req.body);

  const { data: data_GET, error: error_GET } = await supabaseServerClient
    .from('documents')
    .select('id, name, password, html, ext')
    .match({ user_id });

  // Handle error_GET
  if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

  // Max 25 documents per account
  if (data_GET.length >= 25)
    return res.status(400).json({ error: true, message: 'Document limit reached', data: null });

  const currentDoc = data_GET.find((d) => d.id === id);

  if (!currentDoc) return res.status(400).json({ error: true, message: 'Document not found', data: null });

  const { data: data_POST, error: error_POST } = await supabaseServerClient.from('documents').insert({
    name: name,
    ext: currentDoc.ext,
    html: currentDoc.html,
    password: currentDoc.password,
    user_id: user_id,
  });

  // Handle error_POST
  if (error_POST) return res.status(400).json({ error: true, message: error_POST.message, data: null });

  res.status(200).json({ error: false, message: 'Your document was successfully created', data: data_POST });
};
