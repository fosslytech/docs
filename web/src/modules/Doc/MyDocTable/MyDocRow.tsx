import AppCalc from '@icons/products/AppCalc';
import AppWriter from '@icons/products/AppWriter';
import { ActionIcon, Badge, Group, Menu, Text, useMantineTheme } from '@mantine/core';
import { IconDots, IconExternalLink, IconLock, IconTrash } from '@tabler/icons-react';
import { IDocument } from '@ts/supabase.types';
import React from 'react';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const MyDocRow: React.FC<IDocument> = ({ created_at, updated_at, id, name, user_id, ext, password }) => {
  const theme = useMantineTheme();
  return (
    <tr>
      <td>
        <Group spacing="sm">
          {
            {
              odt: <AppWriter size={42} color={theme.colors.blue[6]} />,
              ods: <AppCalc size={42} color={theme.colors.green[6]} />,
            }[ext]
          }
          <Text size="md" weight={500}>
            {name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge variant="dot" size="md" color={password ? 'green' : 'orange'}>
          {password ? 'Protected' : 'Unprotected'}
        </Badge>
      </td>

      <td>{dayjs(created_at).fromNow()}</td>

      <td>{dayjs(updated_at).fromNow()}</td>

      <td>
        <Group spacing="sm" position="left">
          <ActionIcon variant="light" size="lg">
            <IconExternalLink size={20} />
          </ActionIcon>
          <Menu transition="pop" withArrow position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="light" size="lg">
                <IconDots size={20} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              {!password && <Menu.Item icon={<IconLock size={20} />}>Set password</Menu.Item>}
              <Menu.Item icon={<IconTrash size={20} />} color="red">
                Delete document
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </td>
    </tr>
  );
};

export default MyDocRow;
