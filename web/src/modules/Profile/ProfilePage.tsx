import { Container } from '@mantine/core';
import React from 'react';
import Danger from './Sections/Danger';
import Details from './Sections/Details';

const Profile = () => {
  return (
    <Container size="lg" py="xl" mt={40} mb={40}>
      <Details />

      <Danger />
    </Container>
  );
};

export default Profile;
