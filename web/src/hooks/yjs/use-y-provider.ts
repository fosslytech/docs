import { Provider } from '@ts/yjs.types';
import useYjsCtx from 'src/store/yjs/use-yjs-ctx';

// Hook from https://github.com/joebobmiles/y-react

export const useYProviders = (): Map<new (...args: any) => Provider, Map<string, Provider>> => {
  const { providers } = useYjsCtx();

  if (providers !== null) {
    return providers;
  } else {
    throw new Error('Could not retrieve a set of providers. Please wrap in a DocumentProvider.');
  }
};
