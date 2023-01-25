import { useState } from 'react';
import useFetch from '../use-fetch';

export interface IConvertResponse {
  roomName: string;
  output: string;
}

const useConvertApi = () => {
  const { fetchData } = useFetch();
  const [isLoading, setLoading] = useState(false);

  // ---------------------------------------------------------------------------------
  // Generate new empty document
  // ---------------------------------------------------------------------------------

  const newDoc = async (): Promise<IConvertResponse> => {
    setLoading(true);

    const res = await fetchData(process.env.NEXT_PUBLIC_API_URL + '/convert/new-doc', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    setLoading(false);

    return res;
  };

  // ---------------------------------------------------------------------------------
  // Convert .odt to .html
  // ---------------------------------------------------------------------------------

  const odt2Html = async (file: File): Promise<IConvertResponse> => {
    setLoading(true);

    const formData = new FormData();

    formData.append('file', file);

    const res = await fetchData(process.env.NEXT_PUBLIC_API_URL + '/convert/to-html', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    setLoading(false);

    return res;
  };

  return { isLoading, odt2Html, newDoc };
};

export default useConvertApi;
