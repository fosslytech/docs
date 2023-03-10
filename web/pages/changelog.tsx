import AppLayout from '@layout/AppLayout';
import Changelog from '@module/Changelog/ChangelogPage';
import { NextPageWithLayout } from '@ts/global.types';

const Page: NextPageWithLayout<{ data: string }> = ({ data }) => {
  return <Changelog data={data} />;
};

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export const getStaticProps = async () => {
  const data = await fetch('https://raw.githubusercontent.com/fosslytech/docs/master/CHANGELOG.md');
  const changelog = await data.text();

  return { props: { data: changelog } };
};

export default Page;
