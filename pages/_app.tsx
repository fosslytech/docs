import { useEffect, useState } from 'react';

import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

import { getMantineTheme } from '@utils/resources/mantineTheme';
import { BaseStyles } from '@styles/Base';
import { Fonts } from '@styles/Fonts';
import NProgress from '@module/NProgress/NProgress';
import { GlobalCTXProvider } from 'src/store/global/CTX';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import Head from 'next/head';
import { logConsoleCat } from '@utils/functions/consoleCat';
import useGlobalState from 'src/store/global/use-global-state';

const App = ({ Component, pageProps }) => {
  // Handle color scheme
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => logConsoleCat(), []);

  const Root = () => {
    const { appTheme } = useGlobalState();

    return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={getMantineTheme(colorScheme, appTheme)}
        >
          <ModalsProvider>
            <NotificationsProvider>
              {/* Route transition */}
              <NProgress />

              {/* Global styles */}
              <BaseStyles />
              <Fonts />

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
    <GlobalCTXProvider>
      <Root />
    </GlobalCTXProvider>
  );
};

export default App;
