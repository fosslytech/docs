import { ColorScheme, DefaultMantineColor, MantineColor } from '@mantine/core';
import { NextPage } from 'next';
import React, { Dispatch } from 'react';

// -----------------------------------------------------------------
// For global context
// -----------------------------------------------------------------

export type Global_Context_Action =
  | Base_Action
  | { type: 'SET_CONTENT'; payload: ITranslations }
  | { type: 'SET_THEME'; payload: IAppTheme }
  | { type: 'SET_FONT'; payload: IAppFont }
  | { type: 'SET_COLOR_SCHEME'; payload: ColorScheme }
  | { type: 'SET_PRIMARY_COLOR'; payload: DefaultMantineColor };

export interface Global_Context extends Base_Context<Global_Context_Action> {
  content: ITranslations; // Content fetched from public/locales
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

export type IAppTheme = 'Mantine' | 'Catppuccin' | 'Material';

export type IAppFont = 'Roboto' | 'Source Code Pro' | 'Inter' | 'Montserrat';

export type ISupportedInputExtensions = 'html' | 'txt' | 'odt';
export type ISupportedOutputExtensions = 'html' | 'txt' | 'odt' | 'pdf';

// Translation object content

export interface ITranslations {
  header: {
    appName: string;
    useOnline: string;
    settings: string;
    signIn: string;
  };
  footer: {
    appName: string;
    description: string;
    links: {
      title: string;
      links: string[];
    }[];
  };
  navbar: {
    links: string[];
  };
  pages: {
    home: {
      hero: {
        title1: string;
        title2: string;
        title3: string;
        title4: string;
        description: string;
        downloadBtn: string;
        sourceCode: string;
      };

      cards: {
        title: string;
        description: string;
        cards: {
          title: string;
          description: string;
        }[];
      };
    };
    settings: {
      title: string;
      selectLang: string;
      selectLangOptions: {
        en: string;
        fr: string;
        de: string;
      };

      selectTheme: string;
      selectThemeOptions: {
        mantine: string;
        material: string;
        catppuccin: string;
      };

      selectPrimaryColor: string;
      selectPrimaryColorOptions: {
        blue: string;
        red: string;
        green: string;
        yellow: string;
        pink: string;
        teal: string;
      };

      selectFont: string;
      selectFontOptions: {
        inter: string;
        roboto: string;
        montserrat: string;
        sourceCodePro: string;
      };

      selectColor: string;
      selectColorOptions: {
        light: string;
        dark: string;
      };
    };
    download: {
      title: string;
      description: string;
      online: string;
      offline: string;

      optionPWA: {
        description: string;
        buttonLM: string;
        buttonOffline: string;
        buttonInstalled: string;
        buttonUnavailable: string;
        buttonInstall: string;
      };
    };
    doc: {
      title: string;
      cards: {
        title: string;
        description: string;
        button1: string;
        button2: string;
        badge: string;
      }[];
    };
    doc_odt: {
      share: string;
      download: string;
      toolbarLabels: {
        boldControlLabel: string;
        italicControlLabel: string;
        underlineControlLabel: string;
        strikeControlLabel: string;
        clearFormattingControlLabel: string;
        highlightControlLabel: string;

        h1ControlLabel: string;
        h2ControlLabel: string;
        h3ControlLabel: string;
        h4ControlLabel: string;

        bulletListControlLabel: string;
        orderedListControlLabel: string;
        subscriptControlLabel: string;
        superscriptControlLabel: string;

        linkControlLabel: string;
        unlinkControlLabel: string;

        alignLeftControlLabel: string;
        alignCenterControlLabel: string;
        alignJustifyControlLabel: string;
        alignRightControlLabel: string;

        colorPickerControlLabel: string;
        unsetColorControlLabel: string;

        colorControlLabel: string;
      };
      stateConnecting: {
        title: string;
      };
      stateFull: {
        title: string;
        button: string;
      };
    };
    changelog: {
      title: string;
    };
    error: {
      title: string;
      '404': string;
      '401': string;
      '500': string;
      button: string;
    };
  };
  components: {
    timeline: {
      version: string;
      title: string;
      description: string;
      date: string;
    }[];
  };
}
