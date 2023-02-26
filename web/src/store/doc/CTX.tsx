import React, { useReducer } from 'react';
import { Doc_Context } from '@ts/doc.types';
import { initialState, docReducer } from './reducer';

export const DocContext = React.createContext<Doc_Context>(initialState);

export const DocCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(docReducer, initialState);

  return (
    <DocContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </DocContext.Provider>
  );
};
