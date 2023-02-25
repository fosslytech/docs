import React from 'react';
import AppCalc from '@icons/products/AppCalc';
import AppWriter from '@icons/products/AppWriter';
import { ActionIcon, Badge, Group, Menu, Text, Tooltip, useMantineTheme } from '@mantine/core';
import {
  IconDots,
  IconEdit,
  IconExternalLink,
  IconKey,
  IconLock,
  IconLockOff,
  IconTrash,
} from '@tabler/icons-react';
import { IDocument } from '@ts/supabase.types';
import { openModal } from '@mantine/modals';

import RenameModal from './modals/RenameModal';
import PasswordAddModal from './modals/PasswordAddModal';
import DeleteModal from './modals/DeleteModal';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import DecryptModal from './modals/DecryptModal';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import PasswordChangeModal from './modals/PasswordChangeModal';
import PasswordDeleteModal from './modals/PasswordDeleteModal';
import useGlobalCtx from 'src/store/global/use-global-ctx';

dayjs.extend(relativeTime);

const MyDocRow: React.FC<IDocument> = ({ created_at, updated_at, id, name, ext, password }) => {
  const { translate, content } = useGlobalCtx();
  const { handleOpenMyDocument } = useDocCtx();

  const theme = useMantineTheme();

  const handleDocAction = (type: 'delete' | 'name' | 'passwordAdd' | 'passwordChange' | 'passwordDelete') => {
    return openModal({
      title: (
        <Text size="lg" fw={600}>
          {
            {
              delete: translate(content.pages.doc_my.modalDeleteTitle),
              name: translate(content.pages.doc_my.modalNameTitle),
              passwordAdd: translate(content.pages.doc_my.modalPasswordAddTitle),
              passwordChange: translate(content.pages.doc_my.modalPasswordChangeTitle),
              passwordDelete: translate(content.pages.doc_my.modalPasswordDeleteTitle),
            }[type]
          }
        </Text>
      ),
      centered: true,
      children: {
        delete: <DeleteModal id={id} />,
        name: <RenameModal id={id} name={name} />,
        passwordAdd: <PasswordAddModal id={id} />,
        passwordChange: <PasswordChangeModal id={id} />,
        passwordDelete: <PasswordDeleteModal id={id} />,
      }[type],
    });
  };

  // Open existing document
  const handleDocDecrypt = () => {
    if (password) {
      return openModal({
        title: (
          <Text size="lg" fw={600}>
            {translate(content.pages.doc_my.modalDecryptTitle)}
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
          {password ? translate(content.pages.doc_my.protected) : translate(content.pages.doc_my.unprotected)}
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
                {translate(content.pages.doc_my.actionRename)}
              </Menu.Item>

              {password && (
                <>
                  <Menu.Item icon={<IconKey size={20} />} onClick={() => handleDocAction('passwordChange')}>
                    {translate(content.pages.doc_my.actionChangePassword)}
                  </Menu.Item>

                  <Menu.Item
                    icon={<IconLockOff size={20} />}
                    color="yellow"
                    onClick={() => handleDocAction('passwordDelete')}
                  >
                    {translate(content.pages.doc_my.actionRemovePassword)}
                  </Menu.Item>
                </>
              )}

              {!password && (
                <Menu.Item icon={<IconLock size={20} />} onClick={() => handleDocAction('passwordAdd')}>
                  {translate(content.pages.doc_my.actionSetPassword)}
                </Menu.Item>
              )}

              <Menu.Item icon={<IconTrash size={20} />} color="red" onClick={() => handleDocAction('delete')}>
                {translate(content.pages.doc_my.actionDeleteDocument)}
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </td>
    </tr>
  );
};

export default MyDocRow;
