import { NextPageWithLayout } from '@ts/global.types';
import AppLayout from '@layout/AppLayout';
import Reset from '@module/Auth/Reset/ResetPage';

const Page: NextPageWithLayout = () => {
  return <Reset />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
