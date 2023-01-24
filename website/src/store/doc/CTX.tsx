import React from 'react';
import { Doc_Context, Provider } from '@ts/doc.types';
import * as Y from 'yjs';

export const DocContext = React.createContext<Doc_Context>({
  doc: null,
  providers: null,
});

export const DocCTXProvider = ({ children }) => {
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
        doc: new Y.Doc(),
        providers: providers.current,
      }}
    >
      {children}
    </DocContext.Provider>
  );
};
