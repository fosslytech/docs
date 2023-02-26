import { Container, useMantineTheme } from '@mantine/core';

import Editor from './Editor/Editor';
import DocHeader from '../DocHeader/DocHeader';
import StateConnecting from './StateConnecting';
import StateRoomFull from './StateRoomFull';
import { useOdtEditor } from './use-odt-editor';

const Home = () => {
  const theme = useMantineTheme();
  const { editor, connectedUsers, isConnected, isFull } = useOdtEditor();

  // State: Room is full
  if (isFull) return <StateRoomFull />;

  // State: Connecting to the room
  if (!isConnected) return <StateConnecting />;

  return (
    <>
      {/* Some custom styles for the Editor */}
      <style jsx global>{`
        .ProseMirror table .column-resize-handle {
          position: absolute;
          right: -2px;
          top: 0;
          bottom: -2px;
          width: 4px;
          background-color: ${theme.colors[theme.primaryColor][6]};
          pointer-events: none;
        }

        .ProseMirror table td,
        .ProseMirror table th {
          min-width: 1em;
          border: 1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[6]} !important;
          padding: 5px;
          vertical-align: top;
          box-sizing: border-box;
          position: relative;
        }

        .ProseMirror table .selectedCell:after {
          z-index: 2;
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: ${theme.colors[theme.primaryColor][4]}33; /* 20% transparency */
          pointer-events: none;
        }
      `}</style>

      <DocHeader editor={editor} connectedUsers={connectedUsers} />

      <Container size="lg" py="xl" mt={40} mb={40}>
        <Editor editor={editor} />
      </Container>
    </>
  );
};

export default Home;
