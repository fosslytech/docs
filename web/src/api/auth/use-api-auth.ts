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

const handleErrorNotification = (msg: string) => {
  showNotification({
    title: 'Authentication error!',
    message: msg,
    color: 'red',
  });
};

export const useApiAuth = () => {
  const supabaseClient = useSupabaseClient<ISupabase>();
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);

  // ----------------------------------------------------------------------------
  // SignUp - Email & Password
  // ----------------------------------------------------------------------------

  const auth_signUp = async (dto: AuthDTO) => {
    const { email, password } = dto;
    setLoading(true);

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_HOST,
      },
    });

    setLoading(false);

    if (error) return handleErrorNotification(error.message);

    router.push('/auth/confirm');
  };

  // ----------------------------------------------------------------------------
  // SignOut
  // ----------------------------------------------------------------------------

  const auth_signOut = async () => {
    setLoading(true);

    await supabaseClient.auth.signOut();

    setLoading(false);
  };

  // ----------------------------------------------------------------------------
  // Reset Password
  // ----------------------------------------------------------------------------

  const auth_forgotPassword = async (email: string) => {
    setLoading(true);

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: process.env.NEXT_PUBLIC_HOST + '/auth/reset',
    });

    setLoading(false);

    if (error) return handleErrorNotification(error.message);

    showNotification({
      title: 'Email sent successfully!',
      message: 'Click on the link we sent you to reset your password',
      color: 'green',
    });
  };

  const auth_resetPassword = async (password: string) => {
    return await supabaseClient.auth.updateUser({ password: password });
  };

  // ----------------------------------------------------------------------------
  // SignIn - Email & Password
  // ----------------------------------------------------------------------------

  const auth_signInWithPassword = async (dto: AuthDTO) => {
    const { email, password } = dto;
    setLoading(true);

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) return handleErrorNotification(error.message);

    router.push('/doc');
  };

  // ----------------------------------------------------------------------------
  // SignIn - Magic ;ink
  // ----------------------------------------------------------------------------

  const auth_signInWithOtp = async (email: string) => {
    setLoading(true);

    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_HOST,
      },
    });

    closeAllModals();
    setLoading(false);

    if (error) return handleErrorNotification(error.message);

    showNotification({
      title: 'Email sent successfully!',
      message: 'Click on the link in your mail to log in',
      color: 'green',
    });
  };

  // ----------------------------------------------------------------------------
  // SignIn - Provider | GitHub
  // ----------------------------------------------------------------------------

  const auth_signInWithGitHub = async () => {
    supabaseClient.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_HOST + '/doc',
      },
    });
  };

  // ----------------------------------------------------------------------------
  // SignIn - Provider | GitLab
  // ----------------------------------------------------------------------------

  const auth_signInWithGitLab = async () => {
    supabaseClient.auth.signInWithOAuth({
      provider: 'gitlab',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_HOST + '/doc',
      },
    });
  };

  return {
    isLoading,
    auth_signUp,
    auth_signOut,
    auth_signInWithPassword,
    auth_signInWithOtp,
    auth_signInWithGitHub,
    auth_signInWithGitLab,
    auth_resetPassword,
    auth_forgotPassword,
  };
};
