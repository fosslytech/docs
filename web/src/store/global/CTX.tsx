import React, { useReducer } from 'react';
import { Global_Context } from '@ts/global.types';
import { initialState, globalReducer } from './reducer';
import useCachedContext from '@hooks/use-cached-context';
import { useRouter } from 'next/router';

export const GlobalContext = React.createContext<Global_Context>(initialState);

export const GlobalCTXProvider = ({ children }) => {
  const { locale } = useRouter();
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Save/Init state from localStorage
  useCachedContext('ctx_global', { ...state, openBanner: '' }, dispatch);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        // Dynamically get initial value for translations
        content: require(`../../../public/locales/${locale}/translations.json`),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
