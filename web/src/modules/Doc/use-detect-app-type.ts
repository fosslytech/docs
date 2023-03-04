import { IAppType } from '@ts/global.types';
import { useRouter } from 'next/router';

const useDetectAppType = (): IAppType => {
  const { pathname } = useRouter();

  if (pathname.includes('odt')) return 'odt';

  if (pathname.includes('ods')) return 'ods';

  return 'odt';
};

export default useDetectAppType;
