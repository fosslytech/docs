import { Flex, Loader, Title } from '@mantine/core';
import React from 'react';

const StateConnecting = () => {
  return (
    <Flex mt={80} direction="column" align="center">
      <Title mb={20}>Connetcing you to the room</Title>

      <Loader size={80} />
    </Flex>
  );
};

export default StateConnecting;
