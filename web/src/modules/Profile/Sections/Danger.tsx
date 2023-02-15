import { Button, Divider, Flex, Paper, Text } from '@mantine/core';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import useStyles from './Danger.styles';

import { IconAlertTriangle, IconTrash, IconFileText } from '@tabler/icons';

const Danger = () => {
  const { classes, theme } = useStyles();
  const { translate, content } = useGlobalCtx();

  return (
    <Paper radius="md" p="xl" withBorder className={classes.paper}>
      <Flex align="center" mb="xl">
        <IconAlertTriangle size={32} color={theme.colors.red[6]} />

        <Text size={28} weight={600} ml="sm">
          {translate(content.pages.profile.danger.title)}
        </Text>
      </Flex>

      <Flex direction="row" align="center" justify="space-between">
        <Text size="md" weight={400} w="50%">
          {translate(content.pages.profile.danger.deleteDocDescription)}
        </Text>

        <Button color="red" leftIcon={<IconFileText size={20} />}>
          {translate(content.pages.profile.danger.deleteDocButton)}
        </Button>
      </Flex>

      <Divider my="md" />

      <Flex direction="row" align="center" justify="space-between">
        <Text size="md" weight={400} w="50%">
          {translate(content.pages.profile.danger.deleteAccDescription)}
        </Text>

        <Button color="red" leftIcon={<IconTrash size={20} />}>
          {translate(content.pages.profile.danger.deleteAccButton)}
        </Button>
      </Flex>
    </Paper>
  );
};

export default Danger;
