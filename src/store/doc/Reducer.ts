import { Doc_Context, Doc_Context_Action } from '@ts/doc.types';

const noop = () => false;

export const initialState: Doc_Context = {
  dispatch: noop,
  doc: null,
  isDownloading: false,
  isUploading: false,
};

export const globalReducer = (state: Doc_Context, action: Doc_Context_Action): Doc_Context => {
  switch (action.type) {
    case 'DOC_UPLOAD_START':
      return { ...state, doc: action.payload, isUploading: true };
    case 'DOC_UPLOAD_FINISH':
      return { ...state, isUploading: false };

    case 'DOC_NEW':
      return { ...state };

    case 'INIT':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
