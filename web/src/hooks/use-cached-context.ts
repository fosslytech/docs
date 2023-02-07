import { Base_Action, Base_Context } from '@ts/global.types';
import { Dispatch, useEffect } from 'react';
import useNonInitialEffect from './use-non-initial-effect';

const useCachedContext = <IState extends Base_Context<Base_Action>>(
  key: string,
  state: IState,
  dispatch: Dispatch<Base_Action>
) => {
  useEffect(() => {
    const parsed = JSON.parse(localStorage.getItem(key));
    dispatch({ type: 'INIT', payload: parsed });
  }, [key, dispatch]);

  useNonInitialEffect(() => {
    const cachedState = { ...state };
    delete cachedState.dispatch;
    const stringified = JSON.stringify(cachedState);

    if (localStorage.getItem(key) !== stringified) {
      localStorage.setItem(key, stringified);
    }
  }, [state, key, dispatch]);
};

export default useCachedContext;
