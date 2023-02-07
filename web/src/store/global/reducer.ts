import { Global_Context, Global_Context_Action } from '@ts/global.types';
import initialContent from '../../../public/locales/en/translations.json';

const noop = () => false;

export const initialState: Global_Context = {
  dispatch: noop,

  content: initialContent,
  appTheme: 'Mantine',
  appFont: 'Inter',
  appColorScheme: 'dark',
  appPrimaryColor: 'blue',
};

export const globalReducer = (state: Global_Context, action: Global_Context_Action): Global_Context => {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload };

    case 'SET_CONTENT':
      return { ...state, content: action.payload };

    case 'SET_THEME':
      return { ...state, appTheme: action.payload };
    case 'SET_FONT':
      return { ...state, appFont: action.payload };
    case 'SET_COLOR_SCHEME':
      return { ...state, appColorScheme: action.payload };
    case 'SET_PRIMARY_COLOR':
      return { ...state, appPrimaryColor: action.payload };

    default:
      return state;
  }
};
