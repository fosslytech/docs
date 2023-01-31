import AppLayout from '@layout/AppLayout';
import Home from '@module/Doc/Doc';
import { NextPageWithLayout } from '@ts/global.types';

const Page: NextPageWithLayout = () => {
  return <Home />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;