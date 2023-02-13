import { NextPageWithLayout } from '@ts/global.types';
import AppLayout from '@layout/AppLayout';
import Forgot from '@module/Auth/Forgot/ForgotPage';

const Page: NextPageWithLayout = () => {
  return <Forgot />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
