import AppLayout from '@layout/AppLayout';
import Home from '@module/Odt/Odt';
import { NextPageWithLayout } from '@ts/global.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const Page: NextPageWithLayout = () => {
  return <Home />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
