import Link from 'next/link';

import {
  Header,
  Button,
  Text,
  Flex,
  useMantineTheme,
  useMantineColorScheme,
  Badge,
  MediaQuery,
  Burger,
} from '@mantine/core';

import { IconSettings } from '@tabler/icons-react';

import HeaderAvatar from './HeaderAvatar';

import Logo from '@icons/Logo';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import packageJson from '../../../../package.json';
import { Dispatch } from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import AppWriter from '@icons/products/AppWriter';
import AppCalc from '@icons/products/AppCalc';
import useBannerCtx from 'src/store/banner/use-banner-ctx';

interface Props {
  openNavbar: boolean;
  setOpenNavbar: Dispatch<boolean>;
}

const AppHeader: React.FC<Props> = ({ openNavbar, setOpenNavbar }) => {
  const { translate, content } = useGlobalCtx();
  const { banner } = useBannerCtx();
  const theme = useMantineTheme();
  const colorScheme = useMantineColorScheme();
  const session = useSession();

  // const appType = useDetectAppType();

  const logoColor = colorScheme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[7];

  const currentLocation = typeof window !== 'undefined' && window.location.origin;
  const authUrl = process.env.NEXT_PUBLIC_AUTH_URL + '/auth/login?redirectTo=' + currentLocation + '/doc';

  // const getCurrentLogo = () => {
  //   switch (appType) {
  //     case 'odt':
  //       return <AppWriter size={28} color={theme.colors.blue[6]} />;
  //     case 'ods':
  //       return <AppCalc size={28} color={theme.colors.green[6]} />;

  //     default:
  //       return <Logo width={28} fill={theme.colors[theme.primaryColor][6]} />;
  //   }
  // };

  return (
    <Header
      height={{ base: 60, md: 70 }}
      p="md"
      px="xl"
      sx={{ transition: 'ease-in-out 200ms' }}
      top={!!banner ? 50 : 0}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
          <Burger
            opened={openNavbar}
            onClick={() => setOpenNavbar(!openNavbar)}
            size="md"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Link href={'/'}>
          <Flex align="center" style={{ cursor: 'pointer' }}>
            {/* {getCurrentLogo()} */}
            <Logo width={28} fill={theme.colors[theme.primaryColor][6]} />

            <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
              <Text ml={12} fw={700} size={20} color={logoColor}>
                {translate(content.header.appName)}
              </Text>
            </MediaQuery>
          </Flex>
        </Link>

        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Badge ml={16} variant="filled" size="lg" color="gray" tt="none" radius="sm">
            v{packageJson.version}
          </Badge>
        </MediaQuery>

        <div style={{ flex: 1 }}></div>

        <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
          <Link href="/settings">
            <Button size="sm" leftIcon={<IconSettings size={18} />} variant="subtle">
              {translate(content.header.settings)}
            </Button>
          </Link>
        </MediaQuery>

        {session ? (
          <HeaderAvatar />
        ) : (
          <Button size="sm" ml="lg" onClick={() => window.location.replace(authUrl)}>
            {translate(content.header.signIn)}
          </Button>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
