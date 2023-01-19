import { Container, Flex, Group, Paper, Text } from '@mantine/core';
import React from 'react';
import ColorSchemeSwitch from './ColorThemeSwitch/ColorThemeSwitch';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import useStyles from './Settings.styles';
import ThemeSelect from './ThemeSelect/ThemeSelect';

const Settings = () => {
  const {} = useStyles();
  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size={28} weight={600} mb={16}>
        Settings
      </Text>

      <Group align="start">
        <Flex direction="column">
          <Text size="md" weight={400} mb={6}>
            Language select
          </Text>
          <LanguageSelect />
        </Flex>

        <Flex direction="column">
          <Text size="md" weight={400} mb={6}>
            Theme select
          </Text>
          <ThemeSelect />
        </Flex>

        <Flex direction="column">
          <Text size="md" weight={400} mb={6}>
            Color scheme
          </Text>
          <ColorSchemeSwitch />
        </Flex>
      </Group>
    </Paper>
  );
};

export default Settings;
