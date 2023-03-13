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
  extIn: ISupportedInputExtensions;
  extOut: ISupportedOutputExtensions;
}

interface DownloadDTO {
  text: string;
  extIn: ISupportedInputExtensions;
  extOut: ISupportedOutputExtensions;
}

// ---------------------------------------------------------------
// Convert API - upload document
// Converts .odt to raw html used in editor
// ---------------------------------------------------------------

export const useConvertUploadMutation = () => {
  const { fetchData } = useFetch();

  return useMutation(({ file, extIn, extOut }: UploadDTO) => {
    const formData = new FormData();
    formData.append('file', file);

    return fetchData(process.env.NEXT_PUBLIC_API_URL + `/convert?from=${extIn}&to=${extOut}`, {
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
    ({ text, extIn, extOut }: DownloadDTO) => {
      return fetchData(process.env.NEXT_PUBLIC_API_URL + `/download?from=${extIn}&to=${extOut}`, {
        method: 'POST',
        body: JSON.stringify({ text }),
      });
    },

    {
      onSettled: async (data, _error, { extOut }) => {
        if (!data) return;

        jsFileDownload({ url: data, filename: `output.${extOut}` });
      },
    }
  );
};
