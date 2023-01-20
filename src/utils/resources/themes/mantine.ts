import { ColorScheme, MantineThemeOverride } from '@mantine/core';
import { IAppFont } from '@ts/global.types';

export const THEME_MANTINE = (colorScheme: ColorScheme, appFont: IAppFont): MantineThemeOverride => ({
  /** Put your mantine theme override here */
  colorScheme,
  fontFamily: `${appFont}, sans-serif`,
});
