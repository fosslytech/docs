// Translations

export interface ITranslations {
  header: {
    appName: string;
    useOnline: string;
    settings: string;
    signIn: string;
    avatar: {
      label1: string;
      switchAcc: string;
      signOut: string;
    };
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
      back: string;
      invite: string;
      download: {
        button: string;
        odt: string;
        pdf: string;
        txt: string;
        html: string;
      };
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

        tableInsertLabel: string;
        tableDeleteLabel: string;
        rowInsertLabel: string;
        rowDeleteLabel: string;
        columnInsertLabel: string;
        columnDeleteLabel: string;

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
    auth_confirm: {
      title: string;
      description: string;
      openMailApp: string;
      goBack: string;
    };
    auth_forgot: {
      title: string;
      subtitle: string;
      mailLabel: string;
      mailPlaceholder: string;
      toLogin: string;
      button: string;
      errors: {
        email: string;
      };
    };
    auth_login: {
      title: string;
      noAccount: string;
      registerCta: string;
      mailLabel: string;
      mailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      rememberLabel: string;
      forgot: string;
      button: string;
      buttonOtp: string;
      errors: {
        email: string;
        password: string;
      };
    };
    auth_register: {
      title: string;
      yesAccount: string;
      loginCta: string;
      mailLabel: string;
      mailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      generateTooltip: string;
      button: string;
      errors: {
        email: string;
        password: string;
      };
    };
    auth_reset: {
      title: string;
      subtitle: string;
      password1Label: string;
      password1Placeholder: string;
      generateTooltip: string;
      password2Label: string;
      password2Placeholder: string;
      button: string;
      errors: {
        password1: string;
        password2: string;
      };
    };
    profile: {
      danger: {
        title: string;

        deleteDocDescription: string;
        deleteDocButton: string;

        deleteAccDescription: string;
        deleteAccButton: string;
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
  components: {};
}
