import { DocContext } from './CTX';
import { useContext } from 'react';
import { useRouter } from 'next/router';

import { ISupportedOutputExtensions } from '@ts/global.types';
import { Editor } from '@tiptap/react';
import useDownload from '@hooks/use-download';
import { DecryptDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';
import {
  useConvertDownloadMutation,
  useConvertNewMutation,
  useConvertUploadMutation,
} from 'src/api/convert/use-convert-mutation';

import { formatHtmlResponse, formatHtmlRequest } from '@fosslytech/docs-core';
// import { localFormatHtmlRequest } from '@utils/functions/localFormatHtmlRequest';
// import { localFormatHtmlResponse } from '@utils/functions/localFormatHtmlResponse';

const useDocCtx = () => {
  const {
    dispatch,
    initialDocContent,
    initialDocPassword,
    initialDocId,
    isLoadingNew,
    isLoadingUpload,
    isLoadingDownload,
    isRoomFull,
  } = useContext(DocContext);

  const { jsFileDownload } = useDownload();

  const router = useRouter();

  // Doc API - supabase
  const decryptDocMutation = useCommonDocMutation<DecryptDocDTO>('/api/doc/decrypt', 'POST', false);

  // Convert API - custom
  const convertNewMutation = useConvertNewMutation();
  const convertUploadMutation = useConvertUploadMutation();
  const convertDownloadMutation = useConvertDownloadMutation();

  const setInitialContent = (c: string) => dispatch({ type: 'SET_INITIAL_DOC_CONTENT', payload: c });
  const setInitialPassword = (p: string) => dispatch({ type: 'SET_INITIAL_DOC_PASSWORD', payload: p });
  const setInitialId = (i: string) => dispatch({ type: 'SET_INITIAL_DOC_ID', payload: i });

  const handleRoomFull = (next: boolean) => {
    dispatch({ type: 'SET_ROOM_FULL', payload: next });
  };

  // -------------------------------------------------------------------------
  // Handle new document
  // -------------------------------------------------------------------------

  const handleNewDocument = async () => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingNew', value: true } });

    const { data } = await convertNewMutation.mutateAsync();

    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingNew', value: false } });

    router.push(`/doc/odt/${data.roomName}`);
  };

  // -------------------------------------------------------------------------
  // Handle document upload
  // -------------------------------------------------------------------------

  const handleUploadDocument = async (file: File, format: 'odt' | 'ods') => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingUpload', value: true } });

    const data = await convertUploadMutation.mutateAsync({ file, format: 'html' });

    // For local development/testing
    // const formattedHtml = localFormatHtmlResponse(format, data.output);
    const formattedHtml = formatHtmlResponse(format, data.output);

    if (!formattedHtml)
      return dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingUpload', value: false } });

    setInitialContent(formattedHtml);
    router.push(`/doc/odt/${data.roomName}`);

    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingUpload', value: false } });
  };

  // -------------------------------------------------------------------------
  // Handle document download
  // -------------------------------------------------------------------------

  const handleDownloadDocument = async (editor: Editor, format: ISupportedOutputExtensions) => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: true } });

    // For local development/testing
    // const formattedHtml = localFormatHtmlRequest('odt', editor.getHTML());
    const formattedHtml = formatHtmlRequest('odt', editor.getHTML());

    switch (format) {
      case 'html':
        jsFileDownload({ filename: 'output.html', text: editor.getHTML() });

        dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: false } });
        break;

      case 'txt':
        jsFileDownload({ filename: 'output.txt', text: editor.getText() });

        dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: false } });
        break;

      case 'pdf':
        await convertDownloadMutation.mutateAsync({ text: formattedHtml, to: format });

        dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: false } });
        break;

      case 'odt':
      case 'ods':
        await convertDownloadMutation.mutateAsync({ text: formattedHtml, to: format });

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
    const res1 = await convertNewMutation.mutateAsync();
    const res2 = await decryptDocMutation.mutateAsync({ id, password });

    if (res2.error) return;

    if (password) setInitialPassword(password);
    setInitialContent(res2.data);
    setInitialId(id);

    router.push(`/doc/${ext}/${res1.data.roomName}`);
  };

  const handleResetInitialDocument = () => {
    return dispatch({ type: 'RESET_INITIAL_DOC' });
  };

  return {
    initialDocContent,
    setInitialContent,

    initialDocId,
    setInitialId,

    initialDocPassword,
    setInitialPassword,

    handleNewDocument,
    handleUploadDocument,
    handleDownloadDocument,

    isRoomFull,
    handleRoomFull,

    isLoadingNew,
    isLoadingUpload,
    isLoadingDownload,

    handleOpenMyDocument,
    handleResetInitialDocument,
  };
};

export default useDocCtx;
