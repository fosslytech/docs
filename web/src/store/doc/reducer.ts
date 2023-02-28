import { Doc_Context, Doc_Context_Action } from '@ts/doc.types';

const noop = () => false;

export const initialState: Doc_Context = {
  dispatch: noop,
  initialDocContent: '',
  initialDocPassword: '',
  initialDocId: '',

  isRoomFull: false,

  isLoadingNew: false,
  isLoadingUpload: false,
  isLoadingDownload: false,

  isLoadingDecrypt: false,
};

export const docReducer = (state: Doc_Context, action: Doc_Context_Action): Doc_Context => {
  switch (action.type) {
    case 'SET_INITIAL_DOC_CONTENT':
      return { ...state, initialDocContent: action.payload };
    case 'SET_INITIAL_DOC_ID':
      return { ...state, initialDocId: action.payload };
    case 'SET_INITIAL_DOC_PASSWORD':
      return { ...state, initialDocPassword: action.payload };

    case 'RESET_INITIAL_DOC':
      return { ...state, initialDocId: '', initialDocContent: '', initialDocPassword: '' };

    case 'SET_ROOM_FULL':
      return { ...state, isRoomFull: action.payload };

    case 'SET_LOADING':
      return { ...state, [action.payload.key]: action.payload.value };

    default:
      return state;
  }
};
