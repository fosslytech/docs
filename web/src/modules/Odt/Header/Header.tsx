import { ArrowDownloadFilled, PersonFilled, ShareAndroidFilled } from '@fluentui/react-icons';
import useToast from '@hooks/use-toast';
import { Avatar, Button, Group, Header, Paper } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { useRouter } from 'next/router';
import React from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import AvatarGroup from './AvatarGroup';
import DownloadButton from './DownloadButton';
import SaveButton from './SaveButton';

const OdtHeader = () => {
  const { user } = useGlobalCtx();
  const clipboard = useClipboard();
  const toast = useToast();

  const copyUrl = () => {
    clipboard.copy(window.location.toString());
    toast.send('Link copied!', 'Send this link to anyone you want to collab with');
  };

  return (
    <Paper w="100%" p="sm" mb="md">
      <Group position="apart">
        <Group>
          <Button variant="subtle" leftIcon={<ShareAndroidFilled fontSize={22} />} onClick={copyUrl}>
            Share
          </Button>

          <DownloadButton />

          {/* <SaveButton /> */}
        </Group>

        <AvatarGroup />
      </Group>
    </Paper>
  );
};

export default OdtHeader;
