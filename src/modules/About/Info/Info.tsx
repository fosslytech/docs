import {
  BugFilled,
  CodeFilled,
  DatabaseFilled,
  DocumentTableFilled,
  DocumentTextFilled,
  FlashFilled,
  QuestionCircleFilled,
} from '@fluentui/react-icons';
import { Button, Group, Paper, Text, Timeline, useMantineTheme } from '@mantine/core';
import React from 'react';

const InfoSection = () => {
  const theme = useMantineTheme();

  return (
    <Paper radius="md" p="xl" withBorder h="100%">
      <Text size={28} weight={600} mb={16}>
        Info
      </Text>

      <Text mb={16}>Free & Open source online document collaboration tool.</Text>

      <Group align="start">
        <Button
          onClick={() => {
            window.open('https://github.com/CUFTA22/libreoffice-collab', '_blank');
          }}
          leftIcon={<CodeFilled fontSize={20} />}
          size="md"
          color="gray"
        >
          Source code
        </Button>
        <Button
          onClick={() => {
            window.open('https://github.com/CUFTA22/libreoffice-collab/issues/new', '_blank');
          }}
          leftIcon={<BugFilled fontSize={20} />}
          size="md"
          color="red"
          variant="light"
        >
          Report a bug
        </Button>
      </Group>
    </Paper>
  );
};

export default InfoSection;
