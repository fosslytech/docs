import React from 'react';
import AppCalc from '@icons/products/AppCalc';
import AppWriter from '@icons/products/AppWriter';
import { ActionIcon, Badge, Group, Menu, Text, Tooltip, useMantineTheme } from '@mantine/core';
import { IconDots, IconEdit, IconExternalLink, IconLock, IconTrash } from '@tabler/icons-react';
import { IDocument } from '@ts/supabase.types';
import { KeyedMutator } from 'swr';
import { openModal } from '@mantine/modals';

import NameModal from './modals/NameModal';
import PasswordModal from './modals/PasswordModal';
import DeleteModal from './modals/DeleteModal';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import DecryptModal from './modals/DecryptModal';
import useDocContentCtx from 'src/store/doc-content/use-doc-content-ctx';

dayjs.extend(relativeTime);

interface Props extends IDocument {
  mutate: KeyedMutator<any>;
}

const MyDocRow: React.FC<Props> = ({ created_at, updated_at, id, name, ext, password, mutate }) => {
  const theme = useMantineTheme();
  const { handleOpenMyDocument } = useDocContentCtx();

  const handleDocAction = (type: 'delete' | 'name' | 'password') => {
    return openModal({
      title: (
        <Text size="lg" fw={600}>
          {
            {
              delete: 'Delete your document',
              name: 'Rename your document',
              password: 'Set document password',
            }[type]
          }
        </Text>
      ),
      centered: true,
      children: {
        delete: <DeleteModal id={id} mutate={mutate} />,
        name: <NameModal id={id} mutate={mutate} />,
        password: <PasswordModal id={id} mutate={mutate} />,
      }[type],
    });
  };

  const handleDocDecrypt = () => {
    if (password) {
      return openModal({
        title: (
          <Text size="lg" fw={600}>
            Open document
          </Text>
        ),
        centered: true,
        children: <DecryptModal id={id} ext={ext} />,
      });
    }

    return handleOpenMyDocument(ext, id, '');
  };

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
          <Tooltip label="Open document" position="bottom">
            <ActionIcon variant="light" size="lg" onClick={handleDocDecrypt}>
              <IconExternalLink size={20} />
            </ActionIcon>
          </Tooltip>

          <Menu transition="pop" withArrow position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="light" size="lg">
                <IconDots size={20} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconEdit size={20} />} onClick={() => handleDocAction('name')}>
                Rename
              </Menu.Item>

              {!password && (
                <Menu.Item icon={<IconLock size={20} />} onClick={() => handleDocAction('password')}>
                  Set password
                </Menu.Item>
              )}

              <Menu.Item icon={<IconTrash size={20} />} color="red" onClick={() => handleDocAction('delete')}>
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
