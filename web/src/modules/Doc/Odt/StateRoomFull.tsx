import { Button, Flex, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import useGlobalCtx from 'src/store/global/use-global-ctx';

const StateRoomFull = () => {
  const { translate, content } = useGlobalCtx();

  return (
    <Flex mt={80} direction="column" align="center">
      <Title mb={20} align="center">
        {translate(content.pages.doc_odt.stateFull.title)}
      </Title>

      <Link href="/">
        <Button variant="light">{translate(content.pages.doc_odt.stateFull.button)}</Button>
      </Link>
    </Flex>
  );
};

export default StateRoomFull;
