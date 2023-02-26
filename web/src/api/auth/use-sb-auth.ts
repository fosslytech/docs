import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { ISupabase } from '@ts/supabase.types';

export const useSbAuth = () => {
  const supabaseClient = useSupabaseClient<ISupabase>();

  // ----------------------------------------------------------------------------
  // SignOut
  // ----------------------------------------------------------------------------

  const auth_signOut = async () => {
    await supabaseClient.auth.signOut();
  };

  return {
    auth_signOut,
  };
};
