import React from 'react';
import { Flex, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { getNavbarData } from '@utils/resources/navbarData';

interface Props {
  opened: boolean;
}

const AppNavbar: React.FC<Props> = ({ opened }) => {
  const { translate, content } = useGlobalCtx();
  const theme = useMantineTheme();

  return (
    <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
      <Navbar p="xl" hiddenBreakpoint="xs" hidden={!opened} width={{ xs: 300 }}>
        {getNavbarData(content).map((item, i) => (
          <Link href={item.href} key={i} target={item.href.includes('http') ? '_blank' : ''}>
            <Flex p="sm" my="xs" align="center">
              <item.icon fontSize={32} color={theme.colors[theme.primaryColor][5]} />

              <Text ml="md" size={26} fw={500} color={theme.colors[theme.primaryColor][5]}>
                {translate(item.text)}
              </Text>
            </Flex>
          </Link>
        ))}
      </Navbar>
    </MediaQuery>
  );
};

export default AppNavbar;
