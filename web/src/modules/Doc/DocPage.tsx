import { Container, Title } from '@mantine/core';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import Features from './Features/Features';
import useStyles from './Page.styles';

const DocPage = () => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();

  return (
    <Container size="lg" py="xl" mt={60} mb={120}>
      <Title className={classes.title} align="center" mt="sm">
        {translate(content.pages.doc.title)}
      </Title>

      <Features />
    </Container>
  );
};

export default DocPage;
