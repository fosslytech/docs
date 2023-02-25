import { GetServerSideProps } from 'next';
import AppLayout from '@layout/AppLayout';
import Home from '@module/Index/IndexPage';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextPageWithLayout } from '@ts/global.types';

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
  return <Home />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
