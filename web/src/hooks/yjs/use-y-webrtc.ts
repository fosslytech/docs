import React from 'react';
import * as Y from 'yjs';

import { WebrtcProvider } from 'y-webrtc';

import { Awareness } from 'y-protocols/awareness';

import { useYDoc } from './use-y-doc';
import { useYProviders } from './use-y-provider';

// Hook from https://github.com/joebobmiles/y-react

export const useYWebRtc = (
  room: string,
  options: {
    signaling?: string[];
    password?: string;
    awareness?: Awareness;
    maxConns?: number;
    filterBcConns?: boolean;
    peerOpts?: any;
  } = {}
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
      const provider = new WebrtcProvider(
        room,
        doc,
        options as {
          signaling: string[];
          password: string | null;
          awareness: Awareness;
          maxConns: number;
          filterBcConns: boolean;
          peerOpts: any;
        }
      );

      if (!providers.has(WebrtcProvider)) {
        providers.set(WebrtcProvider, new Map());
      }

      providers.get(WebrtcProvider)?.set(room, provider);

      return { doc, provider };
    }
  }, [existingProvider]);
};
