import { GetServerSideProps } from 'next';
import AppLayout from '@layout/AppLayout';
import Settings from '@module/Settings/SettingsPage';
import { NextPageWithLayout } from '@ts/global.types';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return {
    props: {
      initialSession: session,
    },
  };
};

const Page: NextPageWithLayout = () => {
  return <Settings />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
