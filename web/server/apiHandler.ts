import { createServerSupabaseClient, SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ISupabase } from '@ts/supabase.types';
import { NextApiRequest, NextApiResponse } from 'next';

interface CustomApiHandler {
  handler: (
    req: NextApiRequest,
    res: NextApiResponse,
    supabaseClient: SupabaseClient,
    user_id: string
  ) => Promise<void | any>;
  checkAuth: boolean;
}

interface HandlerObject {
  GET?: CustomApiHandler;
  POST?: CustomApiHandler;
  PATCH?: CustomApiHandler;
  DELETE?: CustomApiHandler;
}

const apiHandler = (config: HandlerObject) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { handler, checkAuth = true } = config[req.method] as CustomApiHandler;

    const supabaseServerClient = createServerSupabaseClient<ISupabase>({ req, res });

    const { data: data_User, error: error_User } = await supabaseServerClient.auth.getUser();

    if (checkAuth) {
      // Handle error_User
      if (error_User) return res.status(400).json({ error: true, message: 'No user found', data: null });
    }

    // check handler supports HTTP method
    if (!config[req.method]) return res.status(405).end(`Method ${req.method} Not Allowed`);

    try {
      await handler(req, res, supabaseServerClient, data_User.user.id);
    } catch (err) {
      // global error handler
      console.log(err);
      res.status(500).json({ error: true, message: 'Something went wrong', data: null });
    }
  };
};

export default apiHandler;
