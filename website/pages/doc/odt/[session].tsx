import dynamic from 'next/dynamic';

import AppLayout from '@layout/AppLayout';
import { NextPageWithLayout } from '@ts/global.types';

// import Odt from '@module/Odt/Odt';
const OdtWithNoSSR = dynamic(() => import('@module/Odt/Odt'), {
  ssr: false,
});

const Page: NextPageWithLayout = () => {
  return <OdtWithNoSSR />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
