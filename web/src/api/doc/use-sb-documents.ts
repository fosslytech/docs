import useToast from '@hooks/use-toast';
import { IApiResponse } from '@ts/global.types';
import { useState } from 'react';
import useFetch from '../use-fetch';
import useSWR from 'swr';
import { swrFetcher } from '../fetcher';

export interface DocDTO {
  name: string;
  html: string;
  ext: string;
  password: string;
}

export interface DeleteDocDTO {
  id: string;
}

export interface UpdateDocDTO {
  id?: string;
  html?: string;
  name?: string;
  password?: string;
}

export interface DecryptDocDTO {
  id: string;
  password: string;
}

export const useSbDocuments = () => {
  const { fetchData } = useFetch();
  const toast = useToast();

  const [isLoading, setLoading] = useState(false);

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

  // ----------------------------------------------------------------------------
  // Update doc
  // ----------------------------------------------------------------------------

  const sb_DocumentUpdate = async (data: UpdateDocDTO) => {
    setLoading(true);

    const res: IApiResponse = await fetchData('/api/doc', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.error) return toast.send('Document error!', res.message, 'red');

    toast.send('Document saved successfully!', res.message, 'green');
    setLoading(false);
  };

  // ----------------------------------------------------------------------------
  // Delete doc
  // ----------------------------------------------------------------------------

  const sb_DocumentDelete = async (data: DeleteDocDTO) => {
    setLoading(true);

    const res: IApiResponse = await fetchData('/api/doc', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.error) return toast.send('Document error!', res.message, 'red');

    toast.send('Document saved successfully!', res.message, 'green');
    setLoading(false);
  };

  // ----------------------------------------------------------------------------
  // Delete doc
  // ----------------------------------------------------------------------------

  const sb_DocumentDecrypt = async (data: DecryptDocDTO) => {
    setLoading(true);

    const res: IApiResponse = await fetchData('/api/doc/decrypt', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.error) return toast.send('Document error!', res.message, 'red');

    setLoading(false);

    return res.data;
  };

  return {
    isLoading,
    sb_DocumentInsert,
    sb_DocumentUpdate,
    sb_DocumentDelete,
    sb_DocumentDecrypt,
  };
};

export const useSwrDocuments = () => {
  const toast = useToast();

  const { data, error, isLoading, isValidating, mutate } = useSWR('/api/doc', swrFetcher);

  if (error) toast.send('Document error!', error?.message, 'red');

  return { data: data?.data, isLoading, isValidating, mutate };
};
