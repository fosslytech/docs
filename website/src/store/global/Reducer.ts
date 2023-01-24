import { Global_Context, Global_Context_Action } from '@ts/global.types';

const noop = () => false;

export const initialState: Global_Context = {
  dispatch: noop,
  user: null,
  language: 'EN',
  appTheme: 'Mantine',
  appFont: 'Inter',
  appColorScheme: 'dark',
};

export const globalReducer = (state: Global_Context, action: Global_Context_Action): Global_Context => {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload };

    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_THEME':
      return { ...state, appTheme: action.payload };
    case 'SET_FONT':
      return { ...state, appFont: action.payload };
    case 'SET_COLOR_SCHEME':
      return { ...state, appColorScheme: action.payload };

    default:
      return state;
  }
};
