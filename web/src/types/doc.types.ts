import { Base_Context } from './global.types';

// -----------------------------------------------------------------
// For doc-content context
// -----------------------------------------------------------------

export type Doc_Context_Action =
  | { type: 'SET_INITIAL_DOC_CONTENT'; payload: string }
  | { type: 'SET_INITIAL_DOC_PASSWORD'; payload: string }
  | { type: 'SET_INITIAL_DOC_ID'; payload: string }
  | { type: 'RESET_INITIAL_DOC' }
  | { type: 'SET_ROOM_FULL'; payload: boolean }
  | {
      type: 'SET_LOADING';
      payload: { key: keyof Doc_Context; value: boolean };
    };

export interface Doc_Context extends Base_Context<Doc_Context_Action> {
  initialDocContent: string; // Used when opening saved document and uploading new
  initialDocPassword: string; // Used when opening saved document
  initialDocId: string; // Used when opening saved document

  isRoomFull: boolean;

  isLoadingNew: boolean;
  isLoadingUpload: boolean;
  isLoadingDownload: boolean;

  isLoadingDecrypt: boolean;
}
