import React, { useEffect, useReducer } from 'react';
import { Banner_Context } from '@ts/banner.types';
import { initialState, bannerReducer } from './reducer';
import useBrowser from '@hooks/use-browser';

export const BannerContext = React.createContext<Banner_Context>(initialState);

export const BannerCTXProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bannerReducer, initialState);
  const browser = useBrowser();

  useEffect(() => {
    if (!['unknown', 'Mozilla Firefox'].includes(browser)) {
      dispatch({ type: 'SET_BANNER', payload: 'firefox' });
    }
  }, []);

  return (
    <BannerContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};
