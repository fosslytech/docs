import useToast from '@hooks/use-toast';
import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../queryKeys';
import useFetch from '../use-fetch';

export interface DeleteKeyDTO {
  id: string;
}

// ---------------------------------------------------------------
// Universal hook, used for any action on key API
// ---------------------------------------------------------------

export const useCommonKeyMutation = <DTO>(
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
          queryClient.invalidateQueries(QUERY_KEYS.API_KEYS);
        }

        if (res.error) {
          toast.send('Key error', res.message, 'yellow');
        } else {
          toast.send('Success', res.message, 'green');
        }
      },
    }
  );
};
