import { useEffect } from 'react';
import Head from 'next/head';

import 'src/styles/fonts.css';

import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import NProgress from '@module/NProgress/NProgress';

import { logConsoleCat } from '@utils/functions/consoleCat';
import { getMantineTheme } from '@utils/resources/mantineTheme';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import JoinedCTXProvider from 'src/store/CTX';

const App = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => logConsoleCat(), []);

  const Root = () => {
    const { appTheme, appFont, appColorScheme, toggleColorScheme } = useGlobalCtx();

    return (
      <ColorSchemeProvider colorScheme={appColorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={getMantineTheme(appColorScheme, appTheme, appFont)}
        >
          <ModalsProvider>
            <NotificationsProvider>
              {/* Route transition */}
              <NProgress />

              <Head>
                <title>Collab</title>
                <meta name="description" content="FlightBooker description" />
                <link rel="icon" href="/favicon.ico" />
              </Head>

              {getLayout(<Component {...pageProps} />)}
            </NotificationsProvider>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    );
  };

  return (
    <JoinedCTXProvider>
      <Root />
    </JoinedCTXProvider>
  );
};

export default App;
