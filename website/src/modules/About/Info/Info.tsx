import { Button, Group, Paper, Text } from '@mantine/core';

import { BugFilled, CodeFilled } from '@fluentui/react-icons';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/about/about.json';

const InfoSection = () => {
  const { translate } = useGlobalCtx();

  return (
    <Paper radius="md" p="xl" withBorder h="100%">
      <Text size={28} weight={600} mb={16}>
        {translate(content.info.title)}
      </Text>

      <Text mb={16}>{translate(content.info.description)}</Text>

      <Group align="start">
        <Button
          onClick={() => {
            window.open('https://github.com/CUFTA22/odf-collab', '_blank');
          }}
          leftIcon={<CodeFilled fontSize={20} />}
          size="md"
          color="gray"
        >
          {translate(content.info.buttonSource)}
        </Button>
        <Button
          onClick={() => {
            window.open('https://github.com/CUFTA22/odf-collab/issues/new', '_blank');
          }}
          leftIcon={<BugFilled fontSize={20} />}
          size="md"
          color="red"
          variant="light"
        >
          {translate(content.info.buttonBug)}
        </Button>
      </Group>
    </Paper>
  );
};

export default InfoSection;
