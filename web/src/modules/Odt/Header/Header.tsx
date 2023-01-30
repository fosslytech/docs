import { ShareAndroidFilled } from '@fluentui/react-icons';
import { useWebShare } from '@hooks/use-web-share';
import { Button, Group, Header, Paper } from '@mantine/core';
import { Editor } from '@tiptap/react';
import React from 'react';
import AvatarGroup from './components/AvatarGroup';
import DownloadButton from './components/DownloadButton';
import SaveButton from './components/SaveButton';

interface Props {
  editor: Editor;
}

const OdtHeader: React.FC<Props> = ({ editor }) => {
  const { handleShare } = useWebShare();

  return (
    <Paper w="100%" p="sm" mb="md">
      <Group position="apart">
        <Group>
          <Button
            variant="subtle"
            leftIcon={<ShareAndroidFilled fontSize={22} />}
            onClick={() => handleShare(window.location.toString())}
          >
            Share
          </Button>

          <DownloadButton editor={editor} />

          {/* <SaveButton /> */}
        </Group>

        <AvatarGroup />
      </Group>
    </Paper>
  );
};

export default OdtHeader;
