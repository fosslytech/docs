import { ISupportedInputExtensions, ISupportedOutputExtensions } from '@ts/global.types';
import useFetch from '../use-fetch';
import { getContentType } from '@cufta22/odf-collab-core';
import useDownload from '@hooks/use-download';

export interface IConvertResponse {
  roomName: string;
  output: string;
}

const useDocApi = () => {
  const { fetchData } = useFetch();
  const { jsFileDownload } = useDownload();

  // ---------------------------------------------------------------------------------
  // Generate new empty document
  // ---------------------------------------------------------------------------------

  const doc_createNew = async (): Promise<IConvertResponse> => {
    const res = await fetchData(process.env.NEXT_PUBLIC_API_URL + '/new-doc', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    return res;
  };

  // ---------------------------------------------------------------------------------
  // Convert user doc to .html
  // ---------------------------------------------------------------------------------

  const doc_uploadFile = async (file: File, format: ISupportedInputExtensions): Promise<IConvertResponse> => {
    const formData = new FormData();

    formData.append('file', file);

    const res = await fetchData(process.env.NEXT_PUBLIC_API_URL + `/convert?to=${format}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    return res;
  };

  const doc_downloadFile = async (text: string, to: ISupportedOutputExtensions) => {
    const res = await fetchData(process.env.NEXT_PUBLIC_API_URL + `/prepare-download?to=${to}`, {
      method: 'POST',
      body: JSON.stringify({ text }),
    });

    if (!res) return;

    jsFileDownload({
      filename: `output.${to}`,
      url: process.env.NEXT_PUBLIC_API_URL + `/download?to=${to}&uuid=${res}`,
    });
  };

  return { doc_createNew, doc_uploadFile, doc_downloadFile };
};

export default useDocApi;
