import { Base_Context } from './global.types';

// -----------------------------------------------------------------
// For doc-content context
// -----------------------------------------------------------------

export type Doc_Content_Context_Action = { type: 'SET_INITIAL_DOC_CONTENT'; payload: string };

export interface Doc_Content_Context extends Base_Context<Doc_Content_Context_Action> {
  initialDocContent: string;
}
