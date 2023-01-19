import {
  DeleteRegular,
  PersonFilled,
  PersonRegular,
  SignOutFilled,
  SignOutRegular,
  TicketDiagonalFilled,
  TicketDiagonalRegular,
} from '@fluentui/react-icons';
import { Avatar, Menu, Text } from '@mantine/core';
import { useRouter } from 'next/router';

import React from 'react';
import useGlobalState from 'src/store/global/use-global-state';

const HeaderAvatar = () => {
  const { user, logOut } = useGlobalState();
  const router = useRouter();

  return (
    <Menu shadow="md" width={200} position="bottom-end" withArrow>
      <Menu.Target>
        <Avatar radius="lg" style={{ cursor: 'pointer' }}>
          <PersonFilled fontSize={24} />
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Username</Menu.Label>
        <Menu.Item style={{ overflow: 'hidden' }} disabled>
          <Text lineClamp={1} style={{ overflow: 'hidden' }}>
            {user.username}
          </Text>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Actions</Menu.Label>

        <Menu.Item
          color="yellow"
          icon={<SignOutFilled fontSize={18} />}
          onClick={() => {
            logOut();
          }}
        >
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderAvatar;
