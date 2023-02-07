import { WeatherMoonFilled, WeatherSunnyFilled } from '@fluentui/react-icons';
import { useMantineColorScheme, SegmentedControl, Group, Center, Box, useMantineTheme } from '@mantine/core';

import useGlobalCtx from 'src/store/global/use-global-ctx';

const ColorSchemeSwitch = () => {
  const { translate, content } = useGlobalCtx();
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <SegmentedControl
        value={colorScheme}
        onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
        data={[
          {
            value: 'light',
            label: (
              <Center>
                <WeatherSunnyFilled fontSize={20} color={theme.colors.yellow[6]} />
                <Box ml={10}>{translate(content.pages.settings.selectColorOptions.light)}</Box>
              </Center>
            ),
          },
          {
            value: 'dark',
            label: (
              <Center>
                <WeatherMoonFilled fontSize={20} color={theme.colors.gray[4]} />
                <Box ml={10}>{translate(content.pages.settings.selectColorOptions.dark)}</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
};

export default ColorSchemeSwitch;
