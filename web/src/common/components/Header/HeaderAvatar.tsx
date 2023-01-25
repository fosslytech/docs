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
import useGlobalCtx from 'src/store/global/use-global-ctx';

const HeaderAvatar = () => {
  const { user, logOut } = useGlobalCtx();
  const router = useRouter();

  return (
    <Menu shadow="md" width={200} position="bottom-end" withArrow>
      <Menu.Target>
        <Avatar radius="xl" style={{ cursor: 'pointer' }} color="blue">
          {/* <PersonFilled fontSize={24} /> */}
          {user.username.substring(0, 2)}
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
