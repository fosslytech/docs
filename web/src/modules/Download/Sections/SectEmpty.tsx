import { ArrowDownloadFilled } from '@fluentui/react-icons';

import { Text, Card, Divider, Button, Flex } from '@mantine/core';
import useStyles from './Sections.styles';

const SectEmpty = () => {
  const { classes, theme } = useStyles();

  return (
    <Card shadow="md" radius="md" className={classes.card} p="xl">
      <ArrowDownloadFilled fontSize={30} />

      <Divider size={2} color={theme.colors[theme.primaryColor][6]} w={70} mt={10} mb={20} />

      <Text size="sm" color="dimmed" mt="sm">
        Download a ...
      </Text>

      <Flex justify="end" align="center" mt="lg">
        <Button disabled={true}>Install</Button>
      </Flex>
    </Card>
  );
};

export default SectEmpty;
