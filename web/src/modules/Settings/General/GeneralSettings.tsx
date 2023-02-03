import { Flex, Group, Paper, Text } from '@mantine/core';

import LanguageSelect from './LanguageSelect/LanguageSelect';
import ThemeSelect from './ThemeSelect/ThemeSelect';
import FontSelect from './FontSelect/FontSelect';
import ColorSchemeSwitch from './ColorThemeSwitch/ColorThemeSwitch';
import PrimaryColorSelect from './PrimaryColorSelect/PrimaryColorSelect';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/settings/settings.json';
import { SettingsFilled } from '@fluentui/react-icons';

import useStyles from './GeneralSettings.theme';

const Settings = () => {
  const { translate } = useGlobalCtx();
  const { classes } = useStyles();

  return (
    <Paper radius="md" p="xl" withBorder>
      <Flex align="center" mb={16}>
        <SettingsFilled fontSize={32} />

        <Text size={28} weight={600} ml="sm">
          {translate(content.settings.title)}
        </Text>
      </Flex>

      <Group align="start">
        <Flex direction="column" className={classes.container}>
          <Text size="md" weight={400} mb={6}>
            {translate(content.settings.selectLang)}
          </Text>
          <LanguageSelect />
        </Flex>

        <Flex direction="column" className={classes.container}>
          <Text size="md" weight={400} mb={6}>
            {translate(content.settings.selectTheme)}
          </Text>
          <ThemeSelect />
        </Flex>

        <Flex direction="column" className={classes.container}>
          <Text size="md" weight={400} mb={6}>
            {translate(content.settings.selectPrimaryColor)}
          </Text>
          <PrimaryColorSelect />
        </Flex>

        <Flex direction="column" className={classes.container}>
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
