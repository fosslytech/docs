import { GetServerSideProps } from 'next';
import AppLayout from '@layout/AppLayout';
import MyDocPage from '@module/Doc/MyDoc/MyDocPage';
import { NextPageWithLayout } from '@ts/global.types';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/doc',
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
    },
  };
};

const Page: NextPageWithLayout = () => {
  return <MyDocPage />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
