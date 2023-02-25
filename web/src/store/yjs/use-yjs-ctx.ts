import { YjsContext } from './CTX';
import { useContext } from 'react';

const useYjsCtx = () => {
  const { doc, providers } = useContext(YjsContext);

  return {
    doc,
    providers,
  };
};

export default useYjsCtx;
