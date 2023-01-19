import { ColorScheme, MantineThemeOverride } from '@mantine/core';
import { IAppTheme } from '@ts/global.types';
import { THEME_CATPPUCCIN } from './themes/catppuccin';
import { THEME_MANTINE } from './themes/mantine';

export const getMantineTheme = (
  colorScheme: ColorScheme,
  appTheme: IAppTheme
): MantineThemeOverride => {
  switch (appTheme) {
    case 'Mantine':
      return THEME_MANTINE(colorScheme);
    case 'Catppuccin':
      return THEME_CATPPUCCIN(colorScheme);

    default:
      return THEME_MANTINE(colorScheme);
  }
};
