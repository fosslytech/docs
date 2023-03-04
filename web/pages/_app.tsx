import { useEffect, useState } from 'react';

import 'src/styles/fonts.css';
import 'src/styles/base.css';
import 'src/styles/editor.css';

import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import NProgress from '@module/NProgress/NProgress';

import { logConsoleWarning } from '@utils/functions/consoleWarning';
import { getMantineTheme } from '@utils/resources/mantineTheme';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import JoinedCTXProvider from 'src/store/CTX';
import GlobalSEO from '@module/SEO/GlobalSEO';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ISupabase } from '@ts/supabase.types';
import { QueryCTXProvider } from 'src/api/CTX';

const App = ({ Component, pageProps }) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient<ISupabase>());

  useEffect(() => logConsoleWarning(), []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const Root = () => {
    const { appTheme, appFont, appColorScheme, appPrimaryColor, toggleColorScheme } = useGlobalCtx();

    return (
      <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
        <ColorSchemeProvider colorScheme={appColorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={getMantineTheme(appColorScheme, appPrimaryColor, appTheme, appFont)}
          >
            <QueryCTXProvider>
              <ModalsProvider>
                {/* Route transition */}
                <NProgress />

                {/* Toast notifications */}
                <Notifications />

                {/* Global meta tags */}
                <GlobalSEO />

                {getLayout(<Component {...pageProps} />)}
              </ModalsProvider>
            </QueryCTXProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </SessionContextProvider>
    );
  };

  return (
    <JoinedCTXProvider>
      <Root />
    </JoinedCTXProvider>
  );
};

export default App;
