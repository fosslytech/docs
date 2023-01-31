import { ColorScheme, MantineThemeOverride } from '@mantine/core';
import { IAppFont } from '@ts/global.types';

export const THEME_CATPPUCCIN = (colorScheme: ColorScheme, appFont: IAppFont): MantineThemeOverride => ({
  /** Put your mantine theme override here */
  colorScheme,
  fontFamily: `${appFont}, sans-serif`,

  colors: {
    blue: [
      colorScheme === 'dark' ? '#89b4fa' : '#e1eafd',
      colorScheme === 'dark' ? '#89b4fa' : '#d9e5fd',
      colorScheme === 'dark' ? '#89b4fa' : '#d0dffd',
      colorScheme === 'dark' ? '#89b4fa' : '#c4d7fd',
      colorScheme === 'dark' ? '#89b4fa' : '#b5cdfc',
      colorScheme === 'dark' ? '#89b4fa' : '#a3c1fb',
      colorScheme === 'dark' ? '#89b4fa' : '#8cb1fa',
      colorScheme === 'dark' ? '#89b4fa' : '#6f9df9',
      colorScheme === 'dark' ? '#89b4fa' : '#4b85f7',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
    ],
    red: [
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
      colorScheme === 'dark' ? '#f38ba8' : '#d20f39',
    ],
    green: [
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
      colorScheme === 'dark' ? '#a6e3a1' : '#40a02b',
    ],
    orange: [
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
      colorScheme === 'dark' ? '#fab387' : '#fe640b',
    ],
    yellow: [
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
      colorScheme === 'dark' ? '#f9e2af' : '#df8e1d',
    ],
    violet: [
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
      colorScheme === 'dark' ? '#b4befe' : '#7287fd',
    ],
    pink: [
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
      colorScheme === 'dark' ? '#f5c2e7' : '#ea76cb',
    ],
    grape: [
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
      colorScheme === 'dark' ? '#cba6f7' : '#8839ef',
    ],
    teal: [
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
      colorScheme === 'dark' ? '#8bd5ca' : '#179299',
    ],
    cyan: [
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
      colorScheme === 'dark' ? '#89dceb' : '#04a5e5',
    ],
    lime: [
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
      colorScheme === 'dark' ? '#74c7ec' : '#209fb5',
    ],
    indigo: [
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
      colorScheme === 'dark' ? '#89b4fa' : '#1e66f5',
    ],
    dark: [
      colorScheme === 'dark' ? '#a6adc8' : '#dce0e8',
      colorScheme === 'dark' ? '#9399b2' : '#e6e9ef',
      colorScheme === 'dark' ? '#7f849c' : '#eff1f5',
      colorScheme === 'dark' ? '#6c7086' : '#ccd0da',
      colorScheme === 'dark' ? '#585b70' : '#bcc0cc',
      colorScheme === 'dark' ? '#45475a' : '#acb0be',
      colorScheme === 'dark' ? '#313244' : '#9ca0b0',
      colorScheme === 'dark' ? '#1e1e2e' : '#8c8fa1',
      colorScheme === 'dark' ? '#181825' : '#7c7f93',
      colorScheme === 'dark' ? '#11111b' : '#6c6f85',
    ],
    gray: [
      colorScheme === 'dark' ? '#cdd6f4' : '#eff1f5',
      colorScheme === 'dark' ? '#bac2de' : '#ccd0da',
      colorScheme === 'dark' ? '#a6adc8' : '#bcc0cc',
      colorScheme === 'dark' ? '#9399b2' : '#acb0be',
      colorScheme === 'dark' ? '#7f849c' : '#9ca0b0',
      colorScheme === 'dark' ? '#6c7086' : '#8c8fa1',
      colorScheme === 'dark' ? '#585b70' : '#7c7f93',
      colorScheme === 'dark' ? '#45475a' : '#6c6f85',
      colorScheme === 'dark' ? '#313244' : '#5c5f77',
      colorScheme === 'dark' ? '#1e1e2e' : '#4c4f69',
    ],
  },
});