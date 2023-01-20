import { Container } from '@mantine/core';
import Editor from './Editor/Editor';
import Header from './Header/Header';

const Home = () => {
  return (
    <Container size="lg" py="xl" mt={40} mb={40}>
      <Header />

      <Editor />
    </Container>
  );
};

export default Home;
