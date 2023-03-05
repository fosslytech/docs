import { IBannerType } from '@ts/banner.types';
import React, { useContext } from 'react';
import { BannerContext } from './CTX';

const useBannerCtx = () => {
  const { dispatch, banner } = useContext(BannerContext);

  const setBanner = (next: IBannerType) => dispatch({ type: 'SET_BANNER', payload: next });

  return {
    banner,
    setBanner,
  };
};

export default useBannerCtx;
