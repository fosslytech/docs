import { closeAllModals } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AuthResponse } from '@supabase/supabase-js';
import { ISupabase } from '@ts/supabase.types';
import { useRouter } from 'next/router';
import { useState } from 'react';

export interface AuthDTO {
  email: string;
  password: string;
}

export const useApiAuth = () => {
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
