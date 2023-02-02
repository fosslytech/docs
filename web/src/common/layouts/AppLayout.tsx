import { AppShell } from '@mantine/core';

import AppHeader from '@components/Header/AppHeader';
import AppNavbar from '@components/Navbar/AppNavbar';

import { IFC } from '@ts/global.types';
import { useState } from 'react';

interface Props extends IFC {
  withHeader?: boolean;
}

const AppLayout: React.FC<Props> = ({ children, withHeader = true }) => {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
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
      header={withHeader && <AppHeader opened={opened} setOpened={setOpened} />}
      navbar={<AppNavbar opened={opened} />}
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
