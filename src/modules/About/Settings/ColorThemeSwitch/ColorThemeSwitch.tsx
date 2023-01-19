import { WeatherMoonFilled, WeatherSunnyFilled } from '@fluentui/react-icons';
import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
  useMantineTheme,
} from '@mantine/core';

const ColorSchemeSwitch = () => {
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
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: 'dark',
            label: (
              <Center>
                <WeatherMoonFilled fontSize={20} color={theme.colors.gray[4]} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
};

export default ColorSchemeSwitch;
