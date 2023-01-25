import { useRouter } from 'next/router';

import { Button, ButtonProps, Group, Paper, Text, useMantineTheme } from '@mantine/core';

import { BugFilled, CodeFilled, EditFilled } from '@fluentui/react-icons';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/about/about.json';
import Taiga from '@icons/logos/Taiga';
import GitHub from '@icons/logos/GitHub';

const InfoSection = () => {
  const { translate } = useGlobalCtx();

  const theme = useMantineTheme();
  const router = useRouter();

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
          leftIcon={<GitHub width={22} fill="" />}
          size="md"
          color="blue"
          variant="light"
        >
          {translate(content.info.buttonSource)}
        </Button>
        <Button
          onClick={() => {
            window.open('https://github.com/CUFTA22/odf-collab/issues/new', '_blank');
          }}
          leftIcon={<BugFilled fontSize={22} />}
          size="md"
          color="red"
          variant="light"
        >
          {translate(content.info.buttonBug)}
        </Button>
      </Group>

      <Text mt={16} mb={16}>
        {translate(content.info.changelog)}
      </Text>

      <Group align="start">
        <Button
          onClick={() => {
            router.push('/changelog');
          }}
          leftIcon={<EditFilled fontSize={22} />}
          size="md"
          variant="light"
        >
          {translate(content.info.buttonChangelog)}
        </Button>

        <Button
          onClick={() => {
            window.open('https://tree.taiga.io/project/cufta22-odf-collab/kanban', '_blank');
          }}
          leftIcon={<Taiga width={22} fill="" />}
          size="md"
          variant="light"
          color="green"
        >
          {translate(content.info.buttonTaiga)}
        </Button>
      </Group>
    </Paper>
  );
};

export default InfoSection;
