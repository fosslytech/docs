import aes from 'crypto-js/aes';

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
  const { data: data1, error: error1 } = await supabaseServerClient.auth.getUser();

  // Handle error1
  if (error1) return res.status(400).json({ success: false, message: 'No user found' });

  // ---------------------------------------------------------------------------
  // API Handlers
  // ---------------------------------------------------------------------------

  switch (req.method) {
    // Decrypt single document
    case 'POST':
      // supabaseServerClient.from("documents")

      // Extract data from body
      const { ext, html, name, password } = req.body;

      // Encrypt html
      const ciphertext = aes.encrypt(html, data1.user.id).toString();
      console.log(ciphertext);

      // const { error } = await supabaseServerClient.from('documents').insert({ id: 1, name: 'Denmark' });

      break;

    default:
      res.status(400).json({ success: false, message: 'Method not found' });
      break;
  }
};
