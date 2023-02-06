import { Container } from '@mantine/core';

import Editor from './Editor/Editor';
import Header from './Header/Header';
import StateConnecting from './StateConnecting';
import StateRoomFull from './StateRoomFull';
import { useOdtEditor } from './use-odt-editor';

const Home = () => {
  const { editor, connectedUsers, isConnected, isFull } = useOdtEditor();

  // State: Connecting to the room
  if (!isConnected) return <StateConnecting />;

  // State: Room is full
  // if (isFull) return <StateRoomFull />;

  return (
    <>
      <Header editor={editor} connectedUsers={connectedUsers} />

      <Container size="lg" py="xl" mt={40} mb={40}>
        <Editor editor={editor} />
      </Container>
    </>
  );
};

export default Home;
