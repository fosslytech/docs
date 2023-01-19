import AppLayout from '@layout/AppLayout';
import Error from '@module/Error/Error';

const Page = ({ statusCode }: { statusCode?: 404 | 401 | 500 }) => {
  return (
    <AppLayout>
      <Error code={statusCode} />
    </AppLayout>
  );
};

Page.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Page;
