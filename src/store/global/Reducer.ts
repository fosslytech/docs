import { Global_Context, Global_Context_Action } from '@ts/global.types';

const noop = () => false;

export const initialState: Global_Context = {
  dispatch: noop,
  user: null,
  language: 'EN',
  appTheme: 'Catppuccin',
};

export const globalReducer = (
  state: Global_Context,
  action: Global_Context_Action
): Global_Context => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_THEME':
      return { ...state, appTheme: action.payload };

    default:
      return state;
  }
};
