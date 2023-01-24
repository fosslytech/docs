import { Flex, Group, Paper, Text } from '@mantine/core';

import LanguageSelect from './LanguageSelect/LanguageSelect';
import ThemeSelect from './ThemeSelect/ThemeSelect';
import FontSelect from './FontSelect/FontSelect';
import ColorSchemeSwitch from './ColorThemeSwitch/ColorThemeSwitch';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/about/about.json';

const Settings = () => {
  const { translate } = useGlobalCtx();

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size={28} weight={600} mb={16}>
        {translate(content.settings.title)}
      </Text>

      <Group align="start">
        <Flex direction="column">
          <Text size="md" weight={400} mb={6}>
            {translate(content.settings.selectLang)}
          </Text>
          <LanguageSelect />
        </Flex>

        <Flex direction="column">
          <Text size="md" weight={400} mb={6}>
            {translate(content.settings.selectTheme)}
          </Text>
          <ThemeSelect />
        </Flex>

        <Flex direction="column">
          <Text size="md" weight={400} mb={6}>
            {translate(content.settings.selectFont)}
          </Text>
          <FontSelect />
        </Flex>

        <Flex direction="column">
          <Text size="md" weight={400} mb={6}>
            {translate(content.settings.selectColor)}
          </Text>
          <ColorSchemeSwitch />
        </Flex>
      </Group>
    </Paper>
  );
};

export default Settings;
