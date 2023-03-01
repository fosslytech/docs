import { Container, useMantineTheme } from '@mantine/core';

import Editor from './Editor/Editor';
import DocHeader from '../common/DocHeader';

import { useOdtEditor } from './use-odt-editor';
import StateRoomFull from '../common/StateRoomFull';
import StateConnecting from '../common/StateConnecting';
import { getEditorStyles } from '../common/editorStyles';

const OdtPage = () => {
  const theme = useMantineTheme();
  const { editor, connectedUsers, isConnected, isFull } = useOdtEditor();

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

      <Container size="lg" py="xl" mt={40} mb={40}>
        <Editor editor={editor} />
      </Container>
    </>
  );
};

export default OdtPage;
