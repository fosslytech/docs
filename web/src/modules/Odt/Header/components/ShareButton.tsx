import { ShareAndroidFilled } from '@fluentui/react-icons';
import { useResponsive } from '@hooks/use-responsive';
import { useWebShare } from '@hooks/use-web-share';
import { Button } from '@mantine/core';
import React from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const ShareButton = () => {
  const { translate, content } = useGlobalCtx();
  const { handleShare } = useWebShare();
  const isXs = useResponsive('max', 'xs');

  return (
    <Button
      variant={isXs ? 'light' : 'subtle'}
      leftIcon={!isXs && <ShareAndroidFilled fontSize={22} />}
      onClick={() => handleShare(window.location.toString())}
    >
      {!isXs ? translate(content.pages.doc_odt.share) : <ShareAndroidFilled fontSize={22} />}
    </Button>
  );
};

export default ShareButton;
