import { DocContext } from './CTX';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import useToast from '@hooks/use-toast';

const useDocCtx = () => {
  const { dispatch, doc, isDownloading, isUploading } = useContext(DocContext);
  const toast = useToast();
  const router = useRouter();

  const uploadDoc = (file: File) => {
    if (file.size > 1000000) {
      // If file is bigger than 1mb return
      return toast.send('File too large!', 'Max file size is 1MB');
    }

    dispatch({ type: 'DOC_UPLOAD_START', payload: file });

    console.log(file);

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
