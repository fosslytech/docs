import { PersonFilled } from '@fluentui/react-icons';
import { useResponsive } from '@hooks/use-responsive';
import { Avatar, Text } from '@mantine/core';
import { IYConn } from '@ts/global.types';
import React from 'react';

interface Props {
  connectedUsers: IYConn[];
}

const AvatarGroup: React.FC<Props> = ({ connectedUsers }) => {
  const isXs = useResponsive('max', 'xs');

  const maxDisplayed = isXs ? 1 : 5;
  const hasOverflow = connectedUsers.length > maxDisplayed;

  return (
    <Avatar.Group spacing="sm">
      {connectedUsers.slice(0, maxDisplayed).map((conn) => (
        <Avatar size={42} color={conn.colorName} radius="xl">
          {conn.name.substring(0, 2) || <PersonFilled fontSize={20} />}
        </Avatar>
      ))}

      {hasOverflow && (
        <Avatar size={42} radius="xl">
          <Text size={14}>+{connectedUsers.slice(maxDisplayed).length}</Text>
        </Avatar>
      )}
    </Avatar.Group>
  );
};

export default AvatarGroup;
