import { AddFilled, ArrowUploadFilled, DocumentFilled } from '@fluentui/react-icons';
import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Flex,
  Divider,
  Grid,
  Button,
  FileButton,
  Center,
} from '@mantine/core';
import { FEATURES_DATA } from '@utils/resources/featuresData';
import { useState } from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import Feature from './Feature/Feature';
import useStyles from './Features.styles';

const Features = () => {
  const { translate } = useGlobalCtx();
  const { classes } = useStyles();

  const features = FEATURES_DATA.map((feature, i) => <Feature key={i} {...feature} />);

  return (
    <Container size="lg" py="xl" mt={120} mb={120}>
      <Title className={classes.title} align="center" mt="sm">
        Start collaborating
      </Title>

      <Flex mt={50} gap="md" justify="center" align="center" direction="row" wrap="wrap">
        {features}
      </Flex>
    </Container>
  );
};

export default Features;
