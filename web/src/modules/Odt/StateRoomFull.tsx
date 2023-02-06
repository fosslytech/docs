import { Button, Flex, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import content from '@content/editor/odt.json';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const StateRoomFull = () => {
  const { translate } = useGlobalCtx();

  return (
    <Flex mt={80} direction="column" align="center">
      <Title mb={20} align="center">
        {translate(content.stateFull.title)}
      </Title>

      <Link href="/">
        <Button variant="light">{translate(content.stateFull.button)}</Button>
      </Link>
    </Flex>
  );
};

export default StateRoomFull;
