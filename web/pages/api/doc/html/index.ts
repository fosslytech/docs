import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ISupabase } from '@ts/supabase.types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sbApi_updateDocumentHtml } from 'supabase/doc/html/update';

// ---------------------------------------------------------------------------
// Supabase document API
// ---------------------------------------------------------------------------

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const supabaseServerClient = createServerSupabaseClient<ISupabase>({ req, res });

  // Fetch logged in user
  const { error: error_User } = await supabaseServerClient.auth.getUser();

  // Handle error_User
  if (error_User) return res.status(400).json({ error: true, message: 'No user found', data: null });

  // ---------------------------------------------------------------------------
  // API Handlers
  // ---------------------------------------------------------------------------

  switch (req.method) {
    // Update document html
    case 'UPDATE':
      await sbApi_updateDocumentHtml(req, res, supabaseServerClient);

      break;

    default:
      res.status(400).json({ error: true, message: 'Method not found', data: null });
      break;
  }
};
