import React, { useReducer } from 'react';
import { Doc_Context, Provider } from '@ts/doc.types';
import { initialState, docReducer } from './reducer';
import * as Y from 'yjs';

export const DocContext = React.createContext<Doc_Context>(initialState);

export const DocCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(docReducer, initialState);

  const providers = React.useRef<Map<new (...args: any[]) => Provider, Map<string, Provider>>>(new Map());

  React.useEffect(
    () => () => {
      providers.current.forEach((map) => {
        map.forEach((provider) => provider.destroy());
      });
    },
    []
  );

  return (
    <DocContext.Provider
      value={{
        ...state,
        dispatch,

        doc: new Y.Doc(),
        providers: providers.current,
      }}
    >
      {children}
    </DocContext.Provider>
  );
};
