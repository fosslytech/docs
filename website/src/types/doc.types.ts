import { Base_Action, Base_Context } from './global.types';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

// -----------------------------------------------------------------
// For global context
// -----------------------------------------------------------------

export interface Doc_Context {
  doc: Y.Doc;
  providers: Map<new (...args: any[]) => Provider, Map<string, Provider>> | null;
}

export type Provider = WebrtcProvider;
