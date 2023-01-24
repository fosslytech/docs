import { DocContext } from './CTX';
import { useContext } from 'react';

const useDocCtx = () => {
  const { doc, providers } = useContext(DocContext);

  return {
    doc,
    providers,
  };
};

export default useDocCtx;
