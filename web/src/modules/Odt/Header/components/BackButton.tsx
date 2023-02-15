import { useResponsive } from '@hooks/use-responsive';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconArrowLeft } from '@tabler/icons';

const BackButton = () => {
  const { translate, content } = useGlobalCtx();
  const router = useRouter();
  const isXs = useResponsive('max', 'xs');

  if (isXs) return;

  return (
    <Button variant={'subtle'} leftIcon={<IconArrowLeft size={22} />} onClick={() => router.push('/doc')}>
      {translate(content.pages.doc_odt.back)}
    </Button>
  );
};

export default BackButton;
