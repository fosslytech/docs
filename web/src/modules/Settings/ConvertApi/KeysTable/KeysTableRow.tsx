import React from 'react';

import { ActionIcon, Menu, Text } from '@mantine/core';
import { IconDots, IconKey, IconTrash } from '@tabler/icons-react';
import { IApiKey } from '@ts/supabase.types';
import { openModal } from '@mantine/modals';

import DelKeyModal from '../modals/DelKeyModal';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useGlobalCtx from 'src/store/global/use-global-ctx';

dayjs.extend(relativeTime);

interface Props extends IApiKey {
  value: string;
}

const KeysTableRow: React.FC<Props> = ({ created_at, value, id }) => {
  const { translate, content } = useGlobalCtx();

  // Handle delete key
  const handleKeyDelete = () => {
    return openModal({
      title: (
        <Text size="lg" fw={600}>
          {translate(content.pages.settings.convertApi.modalDelTitle)}
        </Text>
      ),
      centered: true,
      children: <DelKeyModal id={id} />,
    });
  };

  return (
    <tr>
      <td>
        <IconKey size={20} />
      </td>

      <td>
        <Text size="md" weight={500}>
          {value}
        </Text>
      </td>

      <td>{dayjs(created_at).fromNow()}</td>

      <td>
        <Menu transition="pop" withArrow position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="light" size="lg">
              <IconDots size={20} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item icon={<IconTrash size={20} />} color="red" onClick={handleKeyDelete}>
              Delete key
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </td>
    </tr>
  );
};

export default KeysTableRow;
