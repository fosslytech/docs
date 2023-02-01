import { DocContentContext } from './CTX';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import useDocApi from 'src/api/doc/use-doc-api';

import { formatHtmlResponse } from '@cufta22/odf-collab-core';
import { ISupportedInputExtensions, ISupportedOutputExtensions } from '@ts/global.types';
import { Editor } from '@tiptap/react';
import useDownload from '@hooks/use-download';

const useDocContentCtx = () => {
  const { dispatch, initialDocContent, isLoadingNew, isLoadingUpload, isLoadingDownload } =
    useContext(DocContentContext);

  const { jsFileDownload } = useDownload();

  const { doc_createNew, doc_uploadFile, doc_downloadFile } = useDocApi();
  const router = useRouter();

  const setInitialContent = (content: string) =>
    dispatch({ type: 'SET_INITIAL_DOC_CONTENT', payload: content });

  // -------------------------------------------------------------------------
  // Handle new document
  // -------------------------------------------------------------------------

  const handleNewDocument = async () => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingNew', value: true } });

    const data = await doc_createNew();

    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingNew', value: false } });

    router.push(`/doc/odt/${data.roomName}`);
  };

  // -------------------------------------------------------------------------
  // Handle document upload
  // -------------------------------------------------------------------------

  const handleUploadDocument = async (file: File) => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingUpload', value: true } });

    console.log(file.type);

    const data = await doc_uploadFile(file, 'html');

    const formattedHtml = formatHtmlResponse(data.output);

    setInitialContent(formattedHtml);
    router.push(`/doc/odt/${data.roomName}`);

    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingUpload', value: false } });
  };

  // -------------------------------------------------------------------------
  // Handle document download
  // -------------------------------------------------------------------------

  const handleDownloadDocument = async (editor: Editor, format: ISupportedOutputExtensions) => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: true } });

    switch (format) {
      case 'html':
        console.log(editor.getHTML());

        return jsFileDownload({ filename: 'output.html', text: editor.getHTML() });

      case 'txt':
        console.log(editor.getText());

        return jsFileDownload({ filename: 'output.txt', text: editor.getText() });

      case 'pdf':
        return await doc_downloadFile(editor.getHTML(), format);

      case 'odt':
        return await doc_downloadFile(editor.getHTML(), format);

      default:
        break;
    }

    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: false } });
  };

  return {
    initialDocContent,
    setInitialContent,

    handleNewDocument,
    handleUploadDocument,
    handleDownloadDocument,

    isLoadingNew,
    isLoadingUpload,
    isLoadingDownload,
  };
};

export default useDocContentCtx;
