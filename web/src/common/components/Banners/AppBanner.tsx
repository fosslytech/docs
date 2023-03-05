import { useResponsive } from '@hooks/use-responsive';
import { CloseButton, Container, Flex, Header } from '@mantine/core';
import React from 'react';
import useBannerCtx from 'src/store/banner/use-banner-ctx';
import FirefoxBanner from './Firefox';
import useStyles from './AppBanner.styles';

const Banner = () => {
  const { setBanner, banner } = useBannerCtx();
  const isSm = useResponsive('max', 'sm');

  const { classes } = useStyles();

  const bannerContent = {
    // Firefox shill banner
    firefox: <FirefoxBanner />,
  }[banner];

  if (!banner || isSm) return null;

  return (
    <div className={classes.banner}>
      <Container size="lg">
        <Flex align="center" gap="md" h={50}>
          {bannerContent}

          <div style={{ flex: 1 }}></div>

          <CloseButton size="md" iconSize={16} onClick={() => setBanner('')} />
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
