import { Banner_Context, Banner_Context_Action } from '@ts/banner.types';

const noop = () => false;

export const initialState: Banner_Context = {
  dispatch: noop,

  banner: '',
};

export const bannerReducer = (state: Banner_Context, action: Banner_Context_Action): Banner_Context => {
  switch (action.type) {
    case 'SET_BANNER':
      return { ...state, banner: action.payload };

    default:
      return state;
  }
};
