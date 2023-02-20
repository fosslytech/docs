import aes from 'crypto-js/aes';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ISupabase } from '@ts/supabase.types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sbApi_decryptDocument } from 'supabase/doc/decrypt';

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
  if (error_User) return res.status(400).json({ success: false, message: 'No user found' });

  // ---------------------------------------------------------------------------
  // API Handlers
  // ---------------------------------------------------------------------------

  switch (req.method) {
    // Decrypt single document
    case 'POST':
      await sbApi_decryptDocument(req, res, supabaseServerClient, data_User.user.id);
      break;

    default:
      res.status(400).json({ success: false, message: 'Method not found' });
      break;
  }
};
