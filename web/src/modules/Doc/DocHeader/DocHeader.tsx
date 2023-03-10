import { Group, Paper } from '@mantine/core';
import { useSession } from '@supabase/auth-helpers-react';
import { Editor } from '@tiptap/react';
import { IYConn } from '@ts/global.types';
import React from 'react';
import AvatarGroup from './components/AvatarGroup';
import BackButton from './components/BackButton';
import DownloadButton from './components/DownloadButton';
import InviteButton from './components/InviteButton';
import SaveButton from './components/SaveButton';

interface Props {
  editor: Editor;
  connectedUsers: IYConn[];
}

const EditorHeader: React.FC<Props> = ({ editor, connectedUsers }) => {
  const session = useSession();

  return (
    <Paper w="100%" p="sm" mb="md">
      <Group position="apart">
        <Group>
          <BackButton />

          <InviteButton />

          <DownloadButton editor={editor} />

          {session && <SaveButton editor={editor} />}
        </Group>

        <AvatarGroup connectedUsers={connectedUsers} />
      </Group>
    </Paper>
  );
};

export default EditorHeader;
