import useDownload from '@hooks/use-download';
import { ISupportedInputExtensions, ISupportedOutputExtensions } from '@ts/global.types';
import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../use-fetch';

export interface IConvertResponse {
  roomName: string;
  output: string;
}

interface UploadDTO {
  file: File;
  format: ISupportedInputExtensions;
}

interface DownloadDTO {
  text: string;
  to: ISupportedOutputExtensions;
}

// ---------------------------------------------------------------
// Convert API - new document
// Just returns a room uuid
// ---------------------------------------------------------------

export const useConvertNewMutation = () => {
  const { fetchData } = useFetch();

  return useMutation(() => {
    return fetchData('/api/uuid', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
  });
};

// ---------------------------------------------------------------
// Convert API - upload document
// Converts .odt to raw html used in editor
// ---------------------------------------------------------------

export const useConvertUploadMutation = () => {
  const { fetchData } = useFetch();

  return useMutation(({ file, format }: UploadDTO) => {
    const formData = new FormData();
    formData.append('file', file);

    return fetchData(process.env.NEXT_PUBLIC_API_URL + `/convert?to=${format}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });
  });
};

// ---------------------------------------------------------------
// Convert API - download document
// Converts .odt to raw html used in editor
// ---------------------------------------------------------------

export const useConvertDownloadMutation = () => {
  const { fetchData } = useFetch();
  const { jsFileDownload } = useDownload();

  return useMutation(
    ({ text, to }: DownloadDTO) => {
      return fetchData(process.env.NEXT_PUBLIC_API_URL + `/prepare-download?to=${to}`, {
        method: 'POST',
        body: JSON.stringify({ text }),
      });
    },

    {
      onSettled: (data, _error, { to }) => {
        jsFileDownload({
          filename: `output.${to}`,
          url: process.env.NEXT_PUBLIC_API_URL + `/download?to=${to}&uuid=${data}`,
        });
      },
    }
  );
};
