import { Container } from '@mantine/core';

import Editor from './Editor/Editor';
import Header from './Header/Header';
import StateConnecting from './StateConnecting';
import { useOdtEditor } from './use-odt-editor';

const Home = () => {
  const { editor, isConnected, connectedUsers } = useOdtEditor();

  if (!isConnected) return <StateConnecting />;

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
