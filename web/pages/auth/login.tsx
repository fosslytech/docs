import { NextPageWithLayout } from '@ts/global.types';
import AppLayout from '@layout/AppLayout';
import Login from '@module/Auth/Login/LoginPage';

const Page: NextPageWithLayout = () => {
  return <Login />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;