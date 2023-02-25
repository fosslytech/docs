import { Flex, Group, Paper, Text } from '@mantine/core';

import LanguageSelect from './LanguageSelect/LanguageSelect';
import ThemeSelect from './ThemeSelect/ThemeSelect';
import FontSelect from './FontSelect/FontSelect';
import ColorSchemeSwitch from './ColorThemeSwitch/ColorThemeSwitch';
import PrimaryColorSelect from './PrimaryColorSelect/PrimaryColorSelect';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import useStyles from './GeneralSettings.styles';

import { IconSettings } from '@tabler/icons-react';

const GeneralSettings = () => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();

  return (
    <Paper radius="md" p="xl" withBorder>
      <Flex align="center" mb={16}>
        <IconSettings size={32} />

        <Text size={28} weight={600} ml="sm">
          {translate(content.pages.settings.general.title)}
        </Text>
      </Flex>

      <Group align="start">
        <Flex direction="column" className={classes.container}>
          <Text size="md" weight={400} mb={6}>
            {translate(content.pages.settings.general.selectLang)}
          </Text>
          <LanguageSelect />
        </Flex>

        <Flex direction="column" className={classes.container}>
          <Text size="md" weight={400} mb={6}>
            {translate(content.pages.settings.general.selectTheme)}
          </Text>
          <ThemeSelect />
        </Flex>

        <Flex direction="column" className={classes.container}>
          <Text size="md" weight={400} mb={6}>
            {translate(content.pages.settings.general.selectPrimaryColor)}
          </Text>
          <PrimaryColorSelect />
        </Flex>

        <Flex direction="column" className={classes.container}>
          <Text size="md" weight={400} mb={6}>
            {translate(content.pages.settings.general.selectFont)}
          </Text>
          <FontSelect />
        </Flex>

        <Flex direction="column">
          <Text size="md" weight={400} mb={6}>
            {translate(content.pages.settings.general.selectColor)}
          </Text>
          <ColorSchemeSwitch />
        </Flex>
      </Group>
    </Paper>
  );
};

export default GeneralSettings;
