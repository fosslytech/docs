import AppLayout from '@layout/AppLayout';
import Error from '@module/Error/ErrorPage';
import { NextPageWithLayout } from '@ts/global.types';

const Page: NextPageWithLayout = () => {
  return <Error code={404} />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
