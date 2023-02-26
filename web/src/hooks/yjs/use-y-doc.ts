import * as Y from 'yjs';
import useYjsCtx from 'src/store/yjs/use-yjs-ctx';

// Hook from https://github.com/joebobmiles/y-react

export const useYDoc = (): Y.Doc => {
  const { doc } = useYjsCtx();

  if (doc !== null) {
    return doc;
  } else {
    throw new Error('Could not retrieve a document. Please wrap in a DocumentProvider.');
  }
};
