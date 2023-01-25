import { Badge, Card, Divider, Flex, Text } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';

import useGlobalCtx from 'src/store/global/use-global-ctx';
import ButtonNew from './ButtonNew';
import ButtonUpload from './ButtonUpload';
import useStyles from './Feature.styles';

const Feature: React.FC<IFeature> = (feature) => {
  const { classes, theme } = useStyles();

  const { translate } = useGlobalCtx();

  return (
    <Card shadow="md" radius="md" className={classes.card} p="xl">
      <Flex align="center">
        <feature.icon fontSize={40} color={theme.colors[feature.color][6]} />

        <Text size="xl" weight={600} ml={6} c={theme.colors.gray[2]}>
          {translate(feature.title)}
        </Text>

        <div style={{ flex: 1 }}></div>

        <Badge color={feature.color} size="lg" variant="dot">
          {translate(feature.badge)}
        </Badge>
      </Flex>

      <Divider size={2} color={theme.colors[feature.color][6]} w={40} my={10} />

      <Text size="sm" color="dimmed" mt="sm">
        {translate(feature.description)}
      </Text>

      <Flex justify="end" mt="lg">
        <ButtonUpload {...feature} />

        <ButtonNew {...feature} />
      </Flex>
    </Card>
  );
};

export default Feature;
