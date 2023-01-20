import { PersonFilled } from '@fluentui/react-icons';
import { Avatar, Button, Group } from '@mantine/core';
import React from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const Header = () => {
  const { user } = useGlobalCtx();

  return (
    <Group position="apart" mb="md">
      <Group>
        <Button>Download .ODT</Button>
      </Group>

      <Avatar.Group spacing="sm">
        <Avatar size={50} color="blue" radius="xl">
          {user?.username?.substring(0, 2) || <PersonFilled fontSize={20} />}
        </Avatar>

        <Avatar size={50} radius="xl">
          +5
        </Avatar>
      </Avatar.Group>
    </Group>
  );
};

export default Header;
