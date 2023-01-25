import useToast from '@hooks/use-toast';

const useFetch = () => {
  const toast = useToast();

  const fetchData = async (url: string, init?: RequestInit) => {
    const res = await fetch(url, init)
      .then((response) => response.json())
      .catch(() => {
        toast.send('Something went wrong!', 'An error has occurred while processing the request', 'red');
      });

    return res;
  };

  return { fetchData };
};
export default useFetch;
