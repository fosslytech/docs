import { Title, Container, Flex } from '@mantine/core';
import Feature from './Feature/Feature';
import useStyles from './Features.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import { getFeaturesData } from '@utils/resources/featuresData';

const Features = () => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();

  const features = getFeaturesData(content).map((feature, i) => <Feature key={i} {...feature} />);

  return (
    <Container size="lg" py="xl" mt={120} mb={120}>
      <Title className={classes.title} align="center" mt="sm">
        {translate(content.pages.doc.title)}
      </Title>

      <Flex mt={50} gap="md" justify="center" align="center" direction="row" wrap="wrap">
        {features}
      </Flex>
    </Container>
  );
};

export default Features;
