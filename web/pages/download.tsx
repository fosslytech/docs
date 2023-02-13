import AppLayout from '@layout/AppLayout';
import Download from '@module/Download/DownloadPage';
import { NextPageWithLayout } from '@ts/global.types';

const Page: NextPageWithLayout = () => {
  return <Download />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
