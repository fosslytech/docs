import React, { useReducer } from 'react';
import { Global_Context } from '@ts/global.types';
import { initialState, globalReducer } from './Reducer';
import useCachedContext from '@hooks/use-cached-context';

export const GlobalContext = React.createContext<Global_Context>(initialState);

export const GlobalCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Save/Init state from localStorage
  useCachedContext('ctx_global', state, dispatch);

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
