import { Flex, Loader, Title } from '@mantine/core';
import React from 'react';

import content from '@content/editor/odt.json';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const StateConnecting = () => {
  const { translate } = useGlobalCtx();

  return (
    <Flex mt={80} direction="column" align="center">
      <Title mb={20} align="center">
        {translate(content.stateConnecting.title)}
      </Title>

      <Loader size={80} />
    </Flex>
  );
};

export default StateConnecting;
