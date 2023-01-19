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
} from '@mantine/core';
import { CARDS_DATA } from '@utils/resources/cardsData';
import { useState } from 'react';
import useGlobalState from 'src/store/global/use-global-state';
import useStyles from './Cards.styles';

const Cards = () => {
  const { translate } = useGlobalState();
  const { classes, theme } = useStyles();

  const [file, setFile] = useState<File | null>(null);

  const features = CARDS_DATA.map((card, i) => (
    <Grid.Col key={i} span={4}>
      <Card shadow="md" radius="md" className={classes.card} p="xl">
        <Flex align="center">
          <card.icon fontSize={40} color={theme.colors[card.color][6]} />

          <Text size="xl" weight={600} ml={6}>
            {translate(card.title)}
          </Text>

          <div style={{ flex: 1 }}></div>

          <Badge color="green" size="lg" variant="dot">
            Beta
          </Badge>
        </Flex>

        <Divider size={2} color={theme.colors[card.color][9]} w={40} my={10} />

        <Text size="sm" color="dimmed" mt="sm">
          {translate(card.description)}
        </Text>

        <Flex justify="end" mt="lg">
          <FileButton onChange={setFile} accept={card.accept}>
            {(props) => (
              <Button
                variant="default"
                leftIcon={<ArrowUploadFilled fontSize={16} />}
                onClick={() => {}}
                {...props}
              >
                {translate(card.button1)}
              </Button>
            )}
          </FileButton>

          <Button
            variant="filled"
            ml={10}
            leftIcon={<AddFilled fontSize={16} />}
            onClick={() => {}}
            color={card.color}
          >
            {translate(card.button2)}
          </Button>
        </Flex>
      </Card>
    </Grid.Col>
  ));

  return (
    <Container size="lg" py="xl" mt={120} mb={120}>
      <Title className={classes.title} align="center" mt="sm">
        Start collaborating
      </Title>

      <Grid gutter="xl" justify="center" mt={50}>
        {features}
      </Grid>
    </Container>
  );
};

export default Cards;
