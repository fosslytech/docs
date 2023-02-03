import { ColorScheme, DefaultMantineColor, MantineColor } from '@mantine/core';
import { NextPage } from 'next';
import React, { Dispatch } from 'react';

// -----------------------------------------------------------------
// For global context
// -----------------------------------------------------------------

export type Global_Context_Action =
  | Base_Action
  | { type: 'SET_LANGUAGE'; payload: ILang }
  | { type: 'SET_THEME'; payload: IAppTheme }
  | { type: 'SET_FONT'; payload: IAppFont }
  | { type: 'SET_COLOR_SCHEME'; payload: ColorScheme }
  | { type: 'SET_PRIMARY_COLOR'; payload: DefaultMantineColor };

export interface Global_Context extends Base_Context<Global_Context_Action> {
  language: ILang;
  appTheme: IAppTheme;
  appFont: IAppFont;
  appColorScheme: ColorScheme;
  appPrimaryColor: DefaultMantineColor;
}

// -----------------------------------------------------------------
// Global types
// -----------------------------------------------------------------

export interface Base_Context<Action> {
  dispatch: Dispatch<Action>;
}
export type Base_Action = { type: 'INIT'; payload: any };

export interface IFC {
  children?: React.ReactNode;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface IYConn {
  name: string;
  color: string;
  colorName: MantineColor;
}

export type ILang = 'EN';

export type IAppTheme = 'Mantine' | 'Catppuccin' | 'Material';

export type IAppFont = 'Roboto' | 'Source Code Pro' | 'Inter' | 'Montserrat';

export type ISupportedInputExtensions = 'html' | 'txt' | 'odt';
export type ISupportedOutputExtensions = 'html' | 'txt' | 'odt' | 'pdf';
