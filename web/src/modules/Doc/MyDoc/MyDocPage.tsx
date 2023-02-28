import { Container, Title } from '@mantine/core';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import MyDocTable from './MyDocTable/MyDocTable';
import useStyles from '../Page.styles';

const MyDocPage = () => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();

  return (
    <Container size="lg" py="xl" mt={60} mb={120}>
      <Title className={classes.title} align="center" mt="sm" mb={50}>
        {translate(content.pages.doc_my.title)}
      </Title>

      <MyDocTable />
    </Container>
  );
};

export default MyDocPage;
