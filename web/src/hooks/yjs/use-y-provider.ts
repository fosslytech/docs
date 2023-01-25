import { Provider } from '@ts/doc.types';
import useDocCtx from 'src/store/doc/use-doc-ctx';

// Hook from https://github.com/joebobmiles/y-react

export const useYProviders = (): Map<new (...args: any) => Provider, Map<string, Provider>> => {
  const { providers } = useDocCtx();

  if (providers !== null) {
    return providers;
  } else {
    throw new Error('Could not retrieve a set of providers. Please wrap in a DocumentProvider.');
  }
};
