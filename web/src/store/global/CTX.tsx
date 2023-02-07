import React, { useEffect, useReducer } from 'react';
import { Global_Context } from '@ts/global.types';
import { initialState, globalReducer } from './reducer';
import useCachedContext from '@hooks/use-cached-context';
import { useRouter } from 'next/router';

export const GlobalContext = React.createContext<Global_Context>(initialState);

export const GlobalCTXProvider = ({ children }) => {
  const { locale } = useRouter();
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Save/Init state from localStorage
  useCachedContext('ctx_global', state, dispatch);

  // Fetch locales
  useEffect(() => {
    fetch(`/locales/${locale}/translations.json`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) return;
        dispatch({ type: 'SET_CONTENT', payload: data });
      });
  }, [locale, dispatch]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
