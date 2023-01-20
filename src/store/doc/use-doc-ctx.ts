import { DocContext } from './CTX';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const useDocCtx = () => {
  const { dispatch, doc, isDownloading, isUploading } = useContext(DocContext);
  const router = useRouter();

  const uploadDoc = (file: File) => {
    dispatch({ type: 'DOC_UPLOAD_START', payload: file });

    setTimeout(() => dispatch({ type: 'DOC_UPLOAD_FINISH' }), 2000);
  };

  const createNewDoc = () => {
    router.push('/doc/odt/123');
  };

  return {
    doc,
    uploadDoc,
    createNewDoc,
    isDownloading,
    isUploading,
  };
};

export default useDocCtx;
