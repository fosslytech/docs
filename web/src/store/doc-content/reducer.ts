import { Doc_Content_Context, Doc_Content_Context_Action } from '@ts/doc-content.types';

const noop = () => false;

export const initialState: Doc_Content_Context = {
  dispatch: noop,
  initialDocContent: '',
};

export const docReducer = (
  state: Doc_Content_Context,
  action: Doc_Content_Context_Action
): Doc_Content_Context => {
  switch (action.type) {
    case 'SET_INITIAL_DOC_CONTENT':
      return { ...state, initialDocContent: action.payload };

    default:
      return state;
  }
};
