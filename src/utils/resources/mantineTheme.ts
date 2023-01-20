import { ColorScheme, MantineThemeOverride } from '@mantine/core';
import { IAppFont, IAppTheme } from '@ts/global.types';
import { THEME_CATPPUCCIN } from './themes/catppuccin';
import { THEME_MANTINE } from './themes/mantine';
import { THEME_MATERIAL } from './themes/material';

export const getMantineTheme = (
  colorScheme: ColorScheme,
  appTheme: IAppTheme,
  appFont: IAppFont
): MantineThemeOverride => {
  switch (appTheme) {
    case 'Mantine':
      return THEME_MANTINE(colorScheme, appFont);
    case 'Material':
      return THEME_MATERIAL(colorScheme, appFont);
    case 'Catppuccin':
      return THEME_CATPPUCCIN(colorScheme, appFont);

    default:
      return THEME_MANTINE(colorScheme, appFont);
  }
};
