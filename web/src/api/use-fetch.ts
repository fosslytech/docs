import useToast from '@hooks/use-toast';

const useFetch = () => {
  const toast = useToast();

  const fetchData = async (url: string, init?: RequestInit) => {
    const res = await fetch(url, init).catch(() => {
      toast.send('Something went wrong!', 'An error has occurred while processing the request', 'red');
    });

    if (!res) return;

    const contentType = res.headers.get('content-type')!;

    if (contentType.startsWith('application/json;')) return res.json();
    if (contentType.startsWith('text/')) return res.text();

    return res;
  };

  return { fetchData };
};
export default useFetch;
