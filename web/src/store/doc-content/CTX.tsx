import React, { useReducer } from 'react';
import { Doc_Content_Context } from '@ts/doc-content.types';
import { initialState, docReducer } from './reducer';
import * as Y from 'yjs';

export const DocContentContext = React.createContext<Doc_Content_Context>(initialState);

export const DocContentCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(docReducer, initialState);

  return (
    <DocContentContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </DocContentContext.Provider>
  );
};
