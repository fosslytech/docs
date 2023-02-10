import { Group, Paper } from '@mantine/core';
import { Editor } from '@tiptap/react';
import { IYConn } from '@ts/global.types';
import React from 'react';
import AvatarGroup from './components/AvatarGroup';
import BackButton from './components/BackButton';
import DownloadButton from './components/DownloadButton';
import InviteButton from './components/InviteButton';

interface Props {
  editor: Editor;
  connectedUsers: IYConn[];
}

const OdtHeader: React.FC<Props> = ({ editor, connectedUsers }) => {
  return (
    <Paper w="100%" p="sm" mb="md">
      <Group position="apart">
        <Group>
          <BackButton />

          <InviteButton />

          <DownloadButton editor={editor} />

          {/* <SaveButton /> */}
        </Group>

        <AvatarGroup connectedUsers={connectedUsers} />
      </Group>
    </Paper>
  );
};

export default OdtHeader;
