import { PersonFilled } from '@fluentui/react-icons';
import { Avatar, Text } from '@mantine/core';
import React from 'react';

const AvatarGroup = () => {
  return (
    <Avatar.Group spacing="sm">
      <Avatar size={42} color="blue" radius="xl">
        {''.substring(0, 2) || <PersonFilled fontSize={20} />}
      </Avatar>

      <Avatar size={42} radius="xl">
        <Text size={14}>+5</Text>
      </Avatar>
    </Avatar.Group>
  );
};

export default AvatarGroup;
