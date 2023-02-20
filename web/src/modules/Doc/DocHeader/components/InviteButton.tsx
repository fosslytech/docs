import { useResponsive } from '@hooks/use-responsive';
import { useWebShare } from '@hooks/use-web-share';
import { Button } from '@mantine/core';
import React from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconShare } from '@tabler/icons-react';

const InviteButton = () => {
  const { translate, content } = useGlobalCtx();
  const { handleShare } = useWebShare();
  const isXs = useResponsive('max', 'xs');

  return (
    <Button
      variant={isXs ? 'light' : 'subtle'}
      leftIcon={!isXs && <IconShare size={22} />}
      onClick={() => handleShare(window.location.toString())}
    >
      {!isXs ? translate(content.pages.doc_odt.invite) : <IconShare size={22} />}
    </Button>
  );
};

export default InviteButton;
