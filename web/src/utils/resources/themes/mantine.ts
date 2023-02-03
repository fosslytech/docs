import { ColorScheme, DefaultMantineColor, MantineThemeOverride } from '@mantine/core';
import { IAppFont } from '@ts/global.types';

export const THEME_MANTINE = (
  colorScheme: ColorScheme,
  primaryColor: DefaultMantineColor,
  appFont: IAppFont
): MantineThemeOverride => ({
  /** Put your mantine theme override here */
  colorScheme,
  primaryColor,
  fontFamily: `${appFont}, sans-serif`,
});
