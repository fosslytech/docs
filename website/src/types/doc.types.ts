import { Base_Action, Base_Context } from './global.types';

// -----------------------------------------------------------------
// For global context
// -----------------------------------------------------------------

export type Doc_Context_Action =
  | Base_Action
  | { type: 'DOC_UPLOAD_START'; payload: File }
  | { type: 'DOC_UPLOAD_FINISH' }
  | { type: 'DOC_NEW' };

export interface Doc_Context extends Base_Context<Doc_Context_Action> {
  doc: File;
  isUploading: boolean;
  isDownloading: boolean;
}
