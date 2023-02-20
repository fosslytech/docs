import { DocContentContext } from './CTX';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import useDocApi from 'src/api/doc/use-doc-api';

import { formatHtmlResponse } from '@cufta22/odf-collab-core';
import { ISupportedOutputExtensions } from '@ts/global.types';
import { Editor } from '@tiptap/react';
import useDownload from '@hooks/use-download';
import { localFormatHtmlResponse } from '@utils/functions/localFormatHtmlResponse';
import { useSbDocuments } from 'src/api/doc/use-sb-documents';

const useDocContentCtx = () => {
  const { dispatch, initialDocContent, isLoadingNew, isLoadingUpload, isLoadingDownload, isRoomFull } =
    useContext(DocContentContext);

  const { jsFileDownload } = useDownload();

  const { sb_DocumentDecrypt } = useSbDocuments();
  const { doc_createNew, doc_uploadFile, doc_downloadFile } = useDocApi();
  const router = useRouter();

  const setInitialId = (id: string) => dispatch({ type: 'SET_INITIAL_DOC_ID', payload: id });
  const setInitialContent = (content: string) =>
    dispatch({ type: 'SET_INITIAL_DOC_CONTENT', payload: content });

  const handleRoomFull = (next: boolean) => {
    dispatch({ type: 'SET_ROOM_FULL', payload: next });
  };

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

    const data = await doc_uploadFile(file, 'html');

    // For local development
    // const formattedHtml = localFormatHtmlResponse(data.output);
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
        // console.log(editor.getHTML());

        jsFileDownload({ filename: 'output.html', text: editor.getHTML() });

        dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: false } });
        break;

      case 'txt':
        // console.log(editor.getText());

        jsFileDownload({ filename: 'output.txt', text: editor.getText() });

        dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: false } });
        break;

      case 'pdf':
        await doc_downloadFile(editor.getHTML(), format);

        dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: false } });
        break;

      case 'odt':
        await doc_downloadFile(editor.getHTML(), format);

        dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: false } });
        break;

      default:
        break;
    }
  };

  // -------------------------------------------------------------------------
  // Handle open my document
  // -------------------------------------------------------------------------

  const handleOpenMyDocument = async (ext: string, id: string, password: string) => {
    const data = await doc_createNew();
    const html = await sb_DocumentDecrypt({ id, password });

    if (!html) return;

    setInitialContent(html);
    setInitialId(id);

    router.push(`/doc/${ext}/${data.roomName}`);
  };

  return {
    initialDocContent,
    setInitialContent,

    handleNewDocument,
    handleUploadDocument,
    handleDownloadDocument,

    isRoomFull,
    handleRoomFull,

    isLoadingNew,
    isLoadingUpload,
    isLoadingDownload,

    handleOpenMyDocument,
  };
};

export default useDocContentCtx;
