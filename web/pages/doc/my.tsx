import AppLayout from '@layout/AppLayout';
import MyDocPage from '@module/Doc/MyDocPage';
import { NextPageWithLayout } from '@ts/global.types';

const Page: NextPageWithLayout = () => {
  return <MyDocPage />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
