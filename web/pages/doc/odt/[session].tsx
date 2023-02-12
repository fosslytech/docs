import dynamic from 'next/dynamic';

import AppLayout from '@layout/AppLayout';
import { NextPageWithLayout } from '@ts/global.types';

import Odt from '@module/Odt/OdtPage';
// const OdtWithNoSSR = dynamic(() => import('@module/Odt/Odt'), {
//   ssr: false,
// });

const Page: NextPageWithLayout = () => {
  return <Odt />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
