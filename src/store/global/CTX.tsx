import React, { useReducer } from 'react';
import { Global_Context } from '@ts/global.types';
import { initialState, globalReducer } from './Reducer';

export const GlobalContext = React.createContext<Global_Context>(initialState);

export const GlobalCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

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
