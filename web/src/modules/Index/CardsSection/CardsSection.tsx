import { FluentIconsProps } from '@fluentui/react-icons';
import { Title, Text, Card, SimpleGrid, Container } from '@mantine/core';
import useStyles from './CardsSection.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/index/home.json';

export interface CardsSectionProps {
  data: {
    title: {};
    description: {};
    icon: React.FC<FluentIconsProps>;
  }[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ data }) => {
  const { translate } = useGlobalCtx();
  const { classes, theme } = useStyles();

  const features = data.map((feature, i) => (
    <Card key={i} shadow="md" radius="md" className={classes.card} p="xl">
      <feature.icon fontSize={50} color={theme.fn.primaryColor()} />

      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {translate(feature.title)}
      </Text>

      <Text size="sm" color="dimmed" mt="sm">
        {translate(feature.description)}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        {translate(content.cards.title)}
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        {translate(content.cards.description)}
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default CardsSection;
