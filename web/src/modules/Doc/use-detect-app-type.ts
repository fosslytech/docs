import { useRouter } from 'next/router';

const useDetectAppType = () => {
  const { pathname } = useRouter();

  if (pathname.includes('odt')) return 'odt';

  if (pathname.includes('ods')) return 'ods';

  return '';
};

export default useDetectAppType;
