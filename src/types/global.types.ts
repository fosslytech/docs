import { NextPage } from 'next';
import React, { Dispatch } from 'react';

// -----------------------------------------------------------------
// For global context
// -----------------------------------------------------------------

export type Global_Context_Action =
  | { type: 'SET_USER'; payload: IUser }
  | { type: 'SET_LANGUAGE'; payload: ILang }
  | { type: 'SET_THEME'; payload: IAppTheme };

export interface Global_Context {
  dispatch: Dispatch<Global_Context_Action>;
  user: IUser;
  language: ILang;
  appTheme: IAppTheme;
}

// -----------------------------------------------------------------
// Global types
// -----------------------------------------------------------------

export interface IFC {
  children?: React.ReactNode;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface IUser {
  username: string;
}

export type ILang = 'EN';

export type IAppTheme = 'Mantine' | 'Catppuccin';
