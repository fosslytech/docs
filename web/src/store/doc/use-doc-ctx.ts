import { DocContext } from './CTX';
import { useContext } from 'react';
import { useRouter } from 'next/router';

import { IAppType, ISupportedOutputExtensions } from '@ts/global.types';
import { Editor } from '@tiptap/react';
import useDownload from '@hooks/use-download';
import {
  DecryptDocDTO,
  InsertDocDTO,
  UpdateDocDTO,
  useCommonDocMutation,
} from 'src/api/doc/use-my-docs-mutation';
import { useConvertDownloadMutation, useConvertUploadMutation } from 'src/api/convert/use-convert-mutation';

import {
  formatHtmlResponse,
  formatHtmlRequest,
  minifyHtmlRequest,
  unMinifyHtmlRequest,
} from '@fosslytech/docs-core';
import { DEFAULT_ODS } from '@module/Doc/Ods/defaultContent';
import { DEFAULT_ODT } from '@module/Doc/Odt/defaultContent';
import { closeAllModals } from '@mantine/modals';
// import { localFormatHtmlRequest } from '@utils/functions/localFormatHtmlRequest';
// import { localFormatHtmlResponse } from '@utils/functions/localFormatHtmlResponse';

import { v4 as uuidv4 } from 'uuid';
import useDetectAppType from '@module/Doc/use-detect-app-type';

const useDocCtx = () => {
  const {
    dispatch,
    initialDocContent,
    initialDocPassword,
    initialDocId,

    isLoadingDownload,
    isLoadingDecrypt,
    isRoomFull,
  } = useContext(DocContext);

  const { jsFileDownload } = useDownload();

  const router = useRouter();
  const appType = useDetectAppType();

  // Doc API - supabase
  const decryptDocMutation = useCommonDocMutation<DecryptDocDTO>('/api/doc/decrypt', 'POST', false);
  const insertDocMutation = useCommonDocMutation<InsertDocDTO>('/api/doc', 'POST');
  const updateDocMutation = useCommonDocMutation<UpdateDocDTO>('/api/doc/html', 'PATCH');

  // Convert API - custom
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

  const handleNewDocument = async (format: IAppType) => {
    // Clean up existing state, if another document was open before
    if (initialDocId) dispatch({ type: 'RESET_INITIAL_DOC' });

    // Set initial document content
    if (format === 'odt') setInitialContent(DEFAULT_ODT);
    if (format === 'ods') setInitialContent(DEFAULT_ODS);

    const uuid = uuidv4();

    router.push(`/doc/${format}/${uuid}`);
  };

  // -------------------------------------------------------------------------
  // Handle document upload
  // -------------------------------------------------------------------------

  const handleUploadDocument = async (file: File, format: IAppType) => {
    // Clean up existing state, if another document was open before
    if (initialDocId) dispatch({ type: 'RESET_INITIAL_DOC' });

    const data = await convertUploadMutation.mutateAsync({ file, format: 'html' });

    // For local development/testing
    // const formattedHtml = localFormatHtmlResponse(format, data.output);
    const formattedHtml = formatHtmlResponse(format, data.output);

    if (!formattedHtml) return;

    setInitialContent(formattedHtml);
    router.push(`/doc/${format}/${data.roomName}`);
  };

  // -------------------------------------------------------------------------
  // Handle document download
  // -------------------------------------------------------------------------

  const handleDownloadDocument = async (editor: Editor, format: ISupportedOutputExtensions) => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDownload', value: true } });

    // For local development/testing
    // const formattedHtml = localFormatHtmlRequest('odt', editor.getHTML());
    const formattedHtml = formatHtmlRequest(appType || 'odt', editor.getHTML());

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
    // Clean up existing state, if another document was open before
    if (initialDocId) dispatch({ type: 'RESET_INITIAL_DOC' });

    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDecrypt', value: true } });

    const uuid = uuidv4();
    const res2 = await decryptDocMutation.mutateAsync({ id, password });

    dispatch({ type: 'SET_LOADING', payload: { key: 'isLoadingDecrypt', value: false } });

    if (res2.error) return;

    const unMinified = {
      odt: unMinifyHtmlRequest('odt', res2.data),
      ods: unMinifyHtmlRequest('ods', res2.data),
    }[ext];

    if (password) setInitialPassword(password);
    setInitialContent(unMinified);
    setInitialId(id);

    router.push(`/doc/${ext}/${uuid}`);
  };

  // -------------------------------------------------------------------------
  // Handle save my document
  // -------------------------------------------------------------------------

  const handleSaveMyDocument = async (editor: Editor, name: string, password: string) => {
    const html = {
      odt: minifyHtmlRequest('odt', editor.getHTML()),
      ods: minifyHtmlRequest('ods', editor.getHTML()),
    }[appType];

    const res = await insertDocMutation.mutateAsync({
      ext: appType || 'odt',
      html,
      name: name,
      password: password,
    });

    if (password) setInitialPassword(password);
    if (res?.data) setInitialId(res.data);

    closeAllModals();
  };

  // -------------------------------------------------------------------------
  // Handle sync my document
  // -------------------------------------------------------------------------

  const handleSyncMyDocument = async (editor: Editor) => {
    const html = {
      odt: minifyHtmlRequest('odt', editor.getHTML()),
      ods: minifyHtmlRequest('ods', editor.getHTML()),
    }[appType];

    await updateDocMutation.mutateAsync({
      html,
      id: initialDocId,
      password1: initialDocPassword,
    });
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

    isLoadingDownload,

    isLoadingDecrypt,

    handleOpenMyDocument,
    handleSaveMyDocument,
    handleSyncMyDocument,
  };
};

export default useDocCtx;
