import dynamic from 'next/dynamic';

import AppLayout from '@layout/AppLayout';
import { NextPageWithLayout } from '@ts/global.types';

const OdsWithNoSSR = dynamic(() => import('@module/Doc/Ods/OdsPage'), {
  ssr: false,
});

const Page: NextPageWithLayout = () => {
  return <OdsWithNoSSR />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
