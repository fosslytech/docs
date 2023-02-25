import useToast from '@hooks/use-toast';
import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../queryKeys';
import useFetch from '../use-fetch';

export interface InsertDocDTO {
  name: string;
  html: string;
  ext: string;
  password: string;
}

export interface DeleteDocDTO {
  id: string;
}

export interface UpdateDocDTO {
  id: string;
  html?: string;
  name?: string;
  password1?: string; // Old password
  password2?: string; // New password
}

export interface DecryptDocDTO {
  id: string;
  password: string;
}

// ---------------------------------------------------------------
// Universal hook, used for any action on doc API
// ---------------------------------------------------------------

export const useCommonDocMutation = <DTO>(
  url: string,
  method: 'POST' | 'DELETE' | 'PATCH',
  shouldInvalidate: boolean = true
) => {
  const queryClient = useQueryClient();
  const { fetchData } = useFetch();
  const toast = useToast();

  return useMutation(
    (data: DTO) => {
      return fetchData(url, {
        method,
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
    {
      onSettled: (res) => {
        if (shouldInvalidate) {
          queryClient.invalidateQueries(QUERY_KEYS.MY_DOCS);
        }

        if (res.error) {
          toast.send('Document error', res.message, 'yellow');
        } else {
          toast.send('Success', res.message, 'green');
        }
      },
    }
  );
};
