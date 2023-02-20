import useToast from '@hooks/use-toast';
import { showNotification } from '@mantine/notifications';
import { IApiResponse } from '@ts/global.types';
import { useState } from 'react';
import useFetch from '../use-fetch';

export interface DocDTO {
  name: string;
  html: string;
  ext: string;
  password: string;
}

export const useSbDocuments = () => {
  const { fetchData } = useFetch();
  const toast = useToast();

  const [isLoading, setLoading] = useState(false);

  // ----------------------------------------------------------------------------
  // Select doc
  // ----------------------------------------------------------------------------

  const sb_DocumentSelect = async () => {
    setLoading(true);

    const res: IApiResponse = await fetchData('/api/doc', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.error) return toast.send('Document error!', res.message, 'red');

    setLoading(false);

    return res.data;
  };

  // ----------------------------------------------------------------------------
  // Insert doc
  // ----------------------------------------------------------------------------

  const sb_DocumentInsert = async (data: DocDTO) => {
    setLoading(true);

    const res: IApiResponse = await fetchData('/api/doc', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.error) return toast.send('Document error!', res.message, 'red');

    toast.send('Document saved successfully!', res.message, 'green');
    setLoading(false);
  };

  return {
    isLoading,
    sb_DocumentSelect,
    sb_DocumentInsert,
  };
};
