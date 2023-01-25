import { Doc_Context, Doc_Context_Action } from '@ts/doc.types';

const noop = () => false;

export const initialState: Doc_Context = {
  doc: null,
  providers: null,

  dispatch: noop,
  initialDocContent: '',
};

export const docReducer = (state: Doc_Context, action: Doc_Context_Action): Doc_Context => {
  switch (action.type) {
    case 'SET_INITIAL_DOC_CONTENT':
      return { ...state, initialDocContent: action.payload };

    default:
      return state;
  }
};
