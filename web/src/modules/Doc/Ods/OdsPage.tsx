import { Container, useMantineTheme } from '@mantine/core';

import Editor from './Editor/Editor';
import DocHeader from '../common/DocHeader';

import { useOdsEditor } from './use-ods-editor';
import StateRoomFull from '../common/StateRoomFull';
import StateConnecting from '../common/StateConnecting';
import { getEditorStyles } from '../common/editorStyles';

const OdtPage = () => {
  const theme = useMantineTheme();
  const { editor, connectedUsers, isConnected, isFull } = useOdsEditor();

  // State: Room is full
  if (isFull) return <StateRoomFull />;

  // State: Connecting to the room
  if (!isConnected) return <StateConnecting />;

  return (
    <>
      {/* Some custom styles for the Editor */}
      <style jsx global>
        {`
          ${getEditorStyles(theme)}
        `}
      </style>
      <DocHeader editor={editor} connectedUsers={connectedUsers} />

      <Container sx={{ minWidth: '90%' }} py="xl" mt={40} mb={40}>
        <Editor editor={editor} />
      </Container>
    </>
  );
};

export default OdtPage;
