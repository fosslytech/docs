import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../queryKeys';
import useFetch from '../use-fetch';

const useApiKeysQuery = () => {
  const { fetchData } = useFetch();

  return useQuery(
    QUERY_KEYS.API_KEYS,
    async () => {
      const { data } = await fetchData('/api/key');

      return data;
    },
    {
      staleTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );
};

export { useApiKeysQuery };
