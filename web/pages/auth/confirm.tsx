import { NextPageWithLayout } from '@ts/global.types';
import AppLayout from '@layout/AppLayout';
import Confirm from '@module/Auth/Confirm/ConfirmPage';

const Page: NextPageWithLayout = () => {
  return <Confirm />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
