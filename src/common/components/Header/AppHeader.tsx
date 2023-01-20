import React from 'react';
import { Header, Button, Text, Flex, useMantineTheme, useMantineColorScheme, Badge } from '@mantine/core';
import Link from 'next/link';
import HeaderAvatar from './HeaderAvatar';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { StarFilled } from '@fluentui/react-icons';
import Logo from 'src/icons/Logo';
import { useRouter } from 'next/router';
import { openModal } from '@mantine/modals';
import UserModal from './UserModal';

import packageJson from '../../../../package.json';

const AppHeader = () => {
  const { user } = useGlobalCtx();
  const theme = useMantineTheme();
  const colorScheme = useMantineColorScheme();
  const router = useRouter();

  const logoColor = colorScheme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[7];

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Flex align="center" onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <Logo width={28} fill={logoColor} />

          <Text ml={12} fw={700} size={20} color={logoColor}>
            LibreOffice Collab
          </Text>
        </Flex>

        <Badge ml={16} variant="filled" size="lg" color="gray" tt="none" radius="sm">
          v{packageJson.version}
        </Badge>

        <div style={{ flex: 1 }}></div>

        <Link href="/about">
          <Button size="sm" leftIcon={<StarFilled fontSize={16} />} mr={20} variant="subtle">
            About
          </Button>
        </Link>

        {user ? (
          <HeaderAvatar />
        ) : (
          <Button size="sm" onClick={() => openModal({ title: 'Log in', children: <UserModal /> })}>
            Sign in
          </Button>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
