import { AppShell } from '@mantine/core';

import AppHeader from '@components/Header/AppHeader';
import AppNavbar from '@components/Navbar/AppNavbar';
import AppBanner from '@components/Banners/AppBanner';

import { IFC } from '@ts/global.types';
import { useState } from 'react';
import useBannerCtx from 'src/store/banner/use-banner-ctx';

const AppLayout: React.FC<IFC> = ({ children }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { banner } = useBannerCtx();

  return (
    <>
      <AppBanner />

      <AppShell
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            paddingTop: `calc(var(--mantine-header-height, 0) + ${!!banner ? 50 : 0}px)`,
            transition: 'ease-in-out 200ms',
            // height: `calc(100vh - ${HEADER_HEIGHT}px)`,
            // minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
            // overflowY: 'scroll',
          },
          root: {
            // height: `100vh`,
            // overflow: 'hidden',
          },
        })}
        navbarOffsetBreakpoint={69000}
        padding={0}
        header={<AppHeader openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />}
        navbar={<AppNavbar opened={openNavbar} />}
      >
        {children}
      </AppShell>
    </>
  );
};

export default AppLayout;
