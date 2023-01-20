import { AppShell } from '@mantine/core';

import AppHeader from '@components/Header/AppHeader';
import { IFC } from '@ts/global.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props extends IFC {
  withHeader?: boolean;
}

const AppLayout: React.FC<Props> = ({ children, withHeader = true }) => {
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
      padding={0}
      header={withHeader && <AppHeader />}
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
