import { Title, Container, Flex } from '@mantine/core';
import Feature from './Feature/Feature';
import useStyles from './Features.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import { FEATURES_DATA } from '@utils/resources/featuresData';
import content from '@content/doc/doc.json';

const Features = () => {
  const { translate } = useGlobalCtx();
  const { classes } = useStyles();

  const features = FEATURES_DATA.map((feature, i) => <Feature key={i} {...feature} />);

  return (
    <Container size="lg" py="xl" mt={120} mb={120}>
      <Title className={classes.title} align="center" mt="sm">
        {translate(content.title)}
      </Title>

      <Flex mt={50} gap="md" justify="center" align="center" direction="row" wrap="wrap">
        {features}
      </Flex>
    </Container>
  );
};

export default Features;
