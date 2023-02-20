import { Base_Context } from './global.types';

// -----------------------------------------------------------------
// For doc-content context
// -----------------------------------------------------------------

export type Doc_Content_Context_Action =
  | { type: 'SET_INITIAL_DOC_CONTENT'; payload: string }
  | { type: 'SET_INITIAL_DOC_ID'; payload: string }
  | { type: 'SET_ROOM_FULL'; payload: boolean }
  | {
      type: 'SET_LOADING';
      payload: { key: keyof Doc_Content_Context; value: boolean };
    };

export interface Doc_Content_Context extends Base_Context<Doc_Content_Context_Action> {
  initialDocContent: string;
  initialDocId: string;

  isRoomFull: boolean;

  isLoadingNew: boolean;
  isLoadingUpload: boolean;
  isLoadingDownload: boolean;
}
