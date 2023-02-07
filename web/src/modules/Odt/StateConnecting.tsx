import { Flex, Loader, Title } from '@mantine/core';
import React from 'react';

import useGlobalCtx from 'src/store/global/use-global-ctx';

const StateConnecting = () => {
  const { translate, content } = useGlobalCtx();

  return (
    <Flex mt={80} direction="column" align="center">
      <Title mb={20} align="center">
        {translate(content.pages.doc_odt.stateConnecting.title)}
      </Title>

      <Loader size={80} />
    </Flex>
  );
};

export default StateConnecting;
