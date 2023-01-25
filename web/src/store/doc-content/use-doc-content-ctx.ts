import { DocContentContext } from './CTX';
import { useContext } from 'react';

const useDocContentCtx = () => {
  const { dispatch, initialDocContent } = useContext(DocContentContext);

  const setInitialContent = (content: string) =>
    dispatch({ type: 'SET_INITIAL_DOC_CONTENT', payload: content });

  return {
    initialDocContent,
    setInitialContent,
  };
};

export default useDocContentCtx;
