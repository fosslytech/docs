import * as Y from 'yjs';
import useDocCtx from 'src/store/doc/use-doc-ctx';

// Hook from https://github.com/joebobmiles/y-react

export const useYDoc = (): Y.Doc => {
  const { doc } = useDocCtx();

  if (doc !== null) {
    return doc;
  } else {
    throw new Error('Could not retrieve a document. Please wrap in a DocumentProvider.');
  }
};
