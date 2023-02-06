import { Text, Card, SimpleGrid, Container, Flex, Badge, Divider } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import SectEmpty from './SectEmpty';
import useStyles from './Sections.styles';

import SectPWA from './SectPWA';

import content from '@content/download/download.json';

const PlatformsSection = () => {
  const { translate } = useGlobalCtx();
  const { classes, theme } = useStyles();
  const { online } = useNetwork();

  return (
    <Container size="lg" py="xl">
      <Card shadow="md" radius="md" className={classes.card} p="xl">
        <Flex align="center" mt="md">
          <Text size="xl" weight={500}>
            {translate(content.title)}
          </Text>

          <Badge color={!online ? 'red' : 'green'} variant="dot" size="lg" ml="md">
            {!online ? translate(content.offline) : translate(content.online)}
          </Badge>
        </Flex>

        <Divider size={2} color={theme.colors[theme.primaryColor][6]} w={100} mt={10} mb={20} />

        <Text size="sm" color="dimmed" mt="sm">
          {translate(content.description)}
        </Text>
      </Card>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <SectPWA />

        <SectEmpty />

        <SectEmpty />
      </SimpleGrid>
    </Container>
  );
};

export default PlatformsSection;
