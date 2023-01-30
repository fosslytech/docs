import React from 'react';
import * as Y from 'yjs';

import { ProviderOptions, WebrtcProvider } from 'y-webrtc';

import { useYDoc } from './use-y-doc';
import { useYProviders } from './use-y-provider';

// Hook from https://github.com/joebobmiles/y-react

export const useYWebRtc = (
  room: string,
  options: ProviderOptions = {}
): {
  doc: Y.Doc;
  provider: WebrtcProvider;
} => {
  const doc = useYDoc();
  const providers = useYProviders();

  const existingProvider = providers.get(WebrtcProvider)?.get(room) as WebrtcProvider | undefined;

  return React.useMemo(() => {
    if (existingProvider !== undefined) {
      return { doc, provider: existingProvider };
    } else {
      const provider = new WebrtcProvider(room, doc, options);

      if (!providers.has(WebrtcProvider)) {
        providers.set(WebrtcProvider, new Map());
      }

      providers.get(WebrtcProvider)?.set(room, provider);

      return { doc, provider };
    }
  }, [existingProvider]);
};
