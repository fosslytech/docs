import Link from 'next/link';
import { useRouter } from 'next/router';

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
import { openModal } from '@mantine/modals';

import {
  ArrowRight12Filled,
  ArrowRightFilled,
  BookFilled,
  SettingsFilled,
  StarFilled,
} from '@fluentui/react-icons';

import HeaderAvatar from './HeaderAvatar';

import Logo from '@icons/Logo';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/index/header.json';
import packageJson from '../../../../package.json';
import { Dispatch } from 'react';

interface Props {
  opened: boolean;
  setOpened: Dispatch<boolean>;
}

const AppHeader: React.FC<Props> = ({ opened, setOpened }) => {
  const { translate } = useGlobalCtx();
  const theme = useMantineTheme();
  const colorScheme = useMantineColorScheme();
  const router = useRouter();

  const logoColor = colorScheme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[7];

  return (
    <Header height={{ base: 60, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="md"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Flex align="center" onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <Logo width={28} fill={logoColor} />

          <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
            <Text ml={12} fw={700} size={20} color={logoColor}>
              {translate(content.appName)}
            </Text>
          </MediaQuery>
        </Flex>

        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Badge ml={16} variant="filled" size="lg" color="gray" tt="none" radius="sm">
            v{packageJson.version}
          </Badge>
        </MediaQuery>

        <div style={{ flex: 1 }}></div>

        <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
          <Link href="/settings">
            <Button size="sm" leftIcon={<SettingsFilled fontSize={16} />} variant="subtle">
              {translate(content.settings)}
            </Button>
          </Link>
        </MediaQuery>

        {['/', '/settings'].includes(router.pathname) && (
          <Link href="/doc">
            <Button size="sm" ml="lg" rightIcon={<ArrowRightFilled fontSize={16} />}>
              {translate(content.useOnline)}
            </Button>
          </Link>
        )}

        {/* {user ? (
          <HeaderAvatar />
        ) : (
          <Button size="sm" onClick={() => openModal({ title: 'Log in', children: <UserModal /> })}>
            {translate(content.signIn)}
          </Button>
        )} */}
      </div>
    </Header>
  );
};

export default AppHeader;
