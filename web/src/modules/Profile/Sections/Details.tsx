import { Button, Divider, Flex, Paper, Text } from '@mantine/core';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import { DeleteFilled, DocumentTextFilled, PersonFilled } from '@fluentui/react-icons';

const Details = () => {
  const { translate, content } = useGlobalCtx();

  return (
    <Paper radius="md" p="xl" mb={40} withBorder>
      <Flex align="center" mb="xl">
        <PersonFilled fontSize={32} />

        <Text size={28} weight={600} ml="sm">
          {translate(content.pages.profile.danger.title)}
        </Text>
      </Flex>

      <Flex direction="row" align="center" justify="space-between">
        <Text size="md" weight={400} w="50%">
          {translate(content.pages.profile.danger.deleteDocDescription)}
        </Text>
      </Flex>

      <Divider my="md" />

      <Flex direction="row" align="center" justify="space-between">
        <Text size="md" weight={400} w="50%">
          {translate(content.pages.profile.danger.deleteAccDescription)}
        </Text>
      </Flex>
    </Paper>
  );
};

export default Details;
