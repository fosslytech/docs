import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { ISupabase } from '@ts/supabase.types';
import { useState } from 'react';

export interface AuthDTO {
  email: string;
  password: string;
}

export const useSbAuth = () => {
  const supabaseClient = useSupabaseClient<ISupabase>();

  const [isLoading, setLoading] = useState(false);

  // ----------------------------------------------------------------------------
  // SignOut
  // ----------------------------------------------------------------------------

  const auth_signOut = async () => {
    setLoading(true);

    await supabaseClient.auth.signOut();

    setLoading(false);
  };

  return {
    isLoading,
    auth_signOut,
  };
};
