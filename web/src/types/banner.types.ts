// -----------------------------------------------------------------
// For global context
// -----------------------------------------------------------------

import { Base_Context } from './global.types';

export type Banner_Context_Action = { type: 'SET_BANNER'; payload: IBannerType };

export interface Banner_Context extends Base_Context<Banner_Context_Action> {
  banner: IBannerType;
}

export type IBannerType = '' | 'firefox';
