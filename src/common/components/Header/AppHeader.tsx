import React from 'react';
import { Header, Button, Text, Flex, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import HeaderAvatar from './HeaderAvatar';
import useGlobalState from 'src/store/global/use-global-state';
import { StarFilled } from '@fluentui/react-icons';
import Logo from 'src/icons/Logo';
import { useRouter } from 'next/router';

const AppHeader = () => {
  const { user } = useGlobalState();
  const theme = useMantineTheme();
  const colorScheme = useMantineColorScheme();
  const router = useRouter();

  const logoColor =
    colorScheme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[7];

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Flex align="center" onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <Logo width={30} fill={logoColor} />

          <Text ml={12} fw={700} size={20} color={logoColor}>
            LibreOffice Collab
          </Text>
        </Flex>

        <div style={{ flex: 1 }}></div>

        <Link href="/about">
          <Button size="sm" leftIcon={<StarFilled fontSize={16} />} mr={20} variant="subtle">
            About
          </Button>
        </Link>

        {user ? (
          <HeaderAvatar />
        ) : (
          <Link href="/auth/login">
            <Button size="sm">Sign in</Button>
          </Link>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
