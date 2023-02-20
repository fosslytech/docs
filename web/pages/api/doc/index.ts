import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ISupabase } from '@ts/supabase.types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sbApi_createDocument } from 'supabase/doc/create';
import { sbApi_selectDocument } from 'supabase/doc/select';
import { sbApi_updateDocument } from 'supabase/doc/update';
import { sbApi_deleteDocument } from 'supabase/doc/delete';

// ---------------------------------------------------------------------------
// Supabase document API
// ---------------------------------------------------------------------------

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
    // Retrieve user documents
    case 'GET':
      await sbApi_selectDocument(req, res, supabaseServerClient, data_User.user.id);

      break;

    // Create new document
    case 'POST':
      await sbApi_createDocument(req, res, supabaseServerClient, data_User.user.id);

      break;

    // Update document
    case 'PATCH':
      await sbApi_updateDocument(req, res, supabaseServerClient, data_User.user.id);

      break;

    // Delete document
    case 'DELETE':
      await sbApi_deleteDocument(req, res, supabaseServerClient, data_User.user.id);

      break;

    default:
      res.status(400).json({ error: true, message: 'Method not found', data: null });
      break;
  }
};
