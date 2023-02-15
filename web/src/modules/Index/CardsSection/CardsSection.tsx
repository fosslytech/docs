import { Title, Text, Card, SimpleGrid, Container } from '@mantine/core';
import useStyles from './CardsSection.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';
import { getCardsData } from '@utils/resources/cardsData';

const CardsSection = () => {
  const { translate, content } = useGlobalCtx();
  const { classes, theme } = useStyles();

  const features = getCardsData(content).map((feature, i) => (
    <Card key={i} shadow="md" radius="md" className={classes.card} p="xl">
      <feature.icon size={50} color={theme.fn.primaryColor()} />

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
        {translate(content.pages.home.cards.title)}
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        {translate(content.pages.home.cards.description)}
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default CardsSection;
