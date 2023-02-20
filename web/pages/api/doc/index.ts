import AES from 'crypto-js/aes';
import argon2 from 'argon2';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ISupabase } from '@ts/supabase.types';
import type { NextApiRequest, NextApiResponse } from 'next';

// ---------------------------------------------------------------------------
// Supabase document API
// ---------------------------------------------------------------------------

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
// const iv = crypto.randomBytes(16)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const supabaseServerClient = createServerSupabaseClient<ISupabase>({ req, res });

  // Fetch logged in user
  const { data: data_User, error: error_User } = await supabaseServerClient.auth.getUser();

  // Handle error_User
  if (error_User) return res.status(400).json({ error: true, message: 'No user found', data: null });

  // ---------------------------------------------------------------------------
  // API Handlers
  // ---------------------------------------------------------------------------

  switch (req.method) {
    // ---------------------------------------------------------------------------
    // Retrieve user documents
    // ---------------------------------------------------------------------------

    case 'GET':
      // supabaseServerClient.from("documents")

      const { data: data_GET, error: error_GET } = await supabaseServerClient
        .from('documents')
        .select('name, ext, password, created_at, updated_at');

      // Handle error_GET
      if (error_GET) return res.status(400).json({ error: true, message: error_GET.message, data: null });

      res.status(200).json({ error: false, message: 'Documents retrieved', data: data_GET });

      break;

    // ---------------------------------------------------------------------------
    // Create new document
    // ---------------------------------------------------------------------------

    case 'POST':
      // Extract data from body
      const { ext, html, name, password } = JSON.parse(req.body);

      const encriptionKey = password || data_User.user.id;

      // Encrypt html
      const ciphertext = AES.encrypt(html, encriptionKey).toString();
      // Hash password
      const passwordHash = password ? await argon2.hash(password) : '';

      // Don't allow too large documents
      if (ciphertext.length > 20000)
        return res.status(400).json({ error: true, message: 'Your document is too long', data: null });

      const { data: data_POST, error: error_POST } = await supabaseServerClient
        .from('documents')
        .insert({ name, ext, html: ciphertext, password: passwordHash, user_id: data_User.user.id });

      // Handle error_POST
      if (error_POST) return res.status(400).json({ error: true, message: error_POST.message, data: null });

      res
        .status(200)
        .json({ error: false, message: 'Your document was successfully uploaded', data: data_POST });
      break;

    default:
      res.status(400).json({ error: true, message: 'Method not found', data: null });
      break;
  }
};
