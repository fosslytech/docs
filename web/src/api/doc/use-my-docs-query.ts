import { IApiResponse } from '@fosslytech/docs-core';
import { IDocument } from '@ts/supabase.types';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../queryKeys';
import useFetch from '../use-fetch';

const useMyDocsQuery = () => {
  const { fetchData } = useFetch();

  return useQuery<IApiResponse<IDocument[]>['data']>(
    QUERY_KEYS.MY_DOCS,
    async () => {
      const { data } = await fetchData('/api/doc');

      return data;
    },
    {
      staleTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );
};

export { useMyDocsQuery };
