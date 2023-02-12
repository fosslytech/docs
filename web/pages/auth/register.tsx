import { NextPageWithLayout } from '@ts/global.types';
import AppLayout from '@layout/AppLayout';
import Register from '@module/Auth/Register/RegisterPage';

const Page: NextPageWithLayout = () => {
  return <Register />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
