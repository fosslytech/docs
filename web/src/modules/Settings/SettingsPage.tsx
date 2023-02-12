import { Container } from '@mantine/core';
import React from 'react';

import GeneralSettings from './General/GeneralSettings';

const Settings = () => {
  return (
    <Container size="lg" py="xl" mt={40} mb={40}>
      <GeneralSettings />
    </Container>
  );
};

export default Settings;
