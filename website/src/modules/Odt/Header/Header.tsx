import { ArrowDownloadFilled, PersonFilled, ShareAndroidFilled } from '@fluentui/react-icons';
import useToast from '@hooks/use-toast';
import { Avatar, Button, Group } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { useRouter } from 'next/router';
import React from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const Header = () => {
  const { user } = useGlobalCtx();
  const clipboard = useClipboard();
  const toast = useToast();

  const copyUrl = () => {
    clipboard.copy(window.location.toString());
    toast.send('Link copied!', 'Send this link to anyone you want to collab with');
  };

  return (
    <Group position="apart" mb="md">
      <Group>
        <Button variant="subtle" leftIcon={<ShareAndroidFilled fontSize={22} />} onClick={copyUrl}>
          Share
        </Button>

        <Button variant="subtle" leftIcon={<ArrowDownloadFilled fontSize={22} />}>
          Download .ODT
        </Button>

        {/* <Button>Save</Button> */}
      </Group>

      <Avatar.Group spacing="sm">
        <Avatar size={50} color="blue" radius="xl">
          {user?.username?.substring(0, 2) || <PersonFilled fontSize={20} />}
        </Avatar>

        <Avatar size={50} radius="xl">
          +5
        </Avatar>
      </Avatar.Group>
    </Group>
  );
};

export default Header;
