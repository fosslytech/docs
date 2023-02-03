import { ColorScheme, DefaultMantineColor, MantineThemeOverride } from '@mantine/core';
import { IAppFont, IAppTheme } from '@ts/global.types';
import { THEME_CATPPUCCIN } from './themes/catppuccin';
import { THEME_MANTINE } from './themes/mantine';
// import { THEME_MATERIAL } from './themes/material';

export const getMantineTheme = (
  colorScheme: ColorScheme,
  primaryColor: DefaultMantineColor,
  appTheme: IAppTheme,
  appFont: IAppFont
): MantineThemeOverride => {
  switch (appTheme) {
    case 'Mantine':
      return THEME_MANTINE(colorScheme, primaryColor, appFont);
    // case 'Material':
    //   return THEME_MATERIAL(colorScheme, appFont);
    case 'Catppuccin':
      return THEME_CATPPUCCIN(colorScheme, primaryColor, appFont);

    default:
      return THEME_MANTINE(colorScheme, primaryColor, appFont);
  }
};
