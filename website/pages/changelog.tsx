import AppLayout from '@layout/AppLayout';
import Changelog from '@module/Changelog/Changelog';
import { NextPageWithLayout } from '@ts/global.types';

const Page: NextPageWithLayout<{ data: string }> = ({ data }) => {
  return <Changelog data={data} />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export const getStaticProps = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_URL + '/api/read-changelog');
  const changelog = await data.json();

  return { props: { data: changelog } };
};

export default Page;
