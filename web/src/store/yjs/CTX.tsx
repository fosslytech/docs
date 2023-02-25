import React from 'react';
import { Yjs_Context, Provider } from '@ts/yjs.types';

import * as Y from 'yjs';

export const YjsContext = React.createContext<Yjs_Context>({
  doc: null,
  providers: null,
});

export const YjsCTXProvider = ({ children }) => {
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
    <YjsContext.Provider
      value={{
        doc: new Y.Doc(),
        providers: providers.current,
      }}
    >
      {children}
    </YjsContext.Provider>
  );
};
