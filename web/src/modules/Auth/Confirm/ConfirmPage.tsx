import React from 'react';

import { Button, Center, Container, Divider, Paper, Text, Title } from '@mantine/core';

import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { IconMail } from '@tabler/icons';

const ConfirmPage = () => {
  const { translate, content } = useGlobalCtx();

  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <Center style={{ height: '100%' }}>
      <Container size={460} style={{ width: '100%' }} my={40} px={0}>
        <Title align="center" sx={() => ({ fontWeight: 900 })}>
          {translate(content.pages.auth_confirm.title)}
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          {translate(content.pages.auth_confirm.description)}
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Link href={'mailto:'} style={{ minWidth: isMobile ? '100%' : 'unset' }}>
            <Button variant="default" fullWidth leftIcon={<IconMail size={22} />} size="md">
              {translate(content.pages.auth_confirm.openMailApp)}
            </Button>
          </Link>

          <Divider label="Or you can" labelPosition="center" my="xl" />

          <Link href={'/'}>
            <Button variant="light" fullWidth size="md">
              {translate(content.pages.auth_confirm.goBack)}
            </Button>
          </Link>
        </Paper>
      </Container>
    </Center>
  );
};

export default ConfirmPage;
