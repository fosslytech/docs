import { Container } from '@mantine/core';
import React from 'react';

import GeneralSettings from './General/GeneralSettings';
import ConvertApiSettings from './ConvertApi/ConvertApiSettings';

const Settings = () => {
  return (
    <Container size="lg" py="xl" mt={40} mb={40}>
      <GeneralSettings />

      {/* <ConvertApiSettings /> */}
    </Container>
  );
};

export default Settings;
