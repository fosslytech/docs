import { Container, Title } from '@mantine/core';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import MyDocTable from './MyDocTable/MyDocTable';
import useStyles from '../Page.styles';
import MyStats from './MyStats/MyStats';
import { useMyDocsQuery } from 'src/api/doc/use-my-docs-query';

const MyDocPage = () => {
  const { data: documents, isLoading } = useMyDocsQuery();

  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();

  return (
    <Container size="lg" py="xl" mt={60} mb={120}>
      <MyDocTable documents={documents} isLoading={isLoading} />

      <MyStats documents={documents} isLoading={isLoading} />
    </Container>
  );
};

export default MyDocPage;
