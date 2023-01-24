import React, { useReducer } from 'react';
import { Doc_Context } from '@ts/doc.types';
import { initialState, globalReducer } from './Reducer';

import useCachedContext from '@hooks/use-cached-context';

export const DocContext = React.createContext<Doc_Context>(initialState);

export const DocCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Save/Init state from localStorage
  // useCachedContext('ctx_doc', state, dispatch);

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
