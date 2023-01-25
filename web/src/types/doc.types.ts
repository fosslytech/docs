import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

// -----------------------------------------------------------------
// For doc context
// -----------------------------------------------------------------

export interface Doc_Context {
  doc: Y.Doc;
  providers: Map<new (...args: any[]) => Provider, Map<string, Provider>> | null;
}

export type Provider = WebrtcProvider;
