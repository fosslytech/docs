import {
  ArrowDownloadFilled,
  ChevronDownFilled,
  CodeFilled,
  DocumentBulletListFilled,
  TextBulletListSquareFilled,
  TextDescriptionFilled,
} from '@fluentui/react-icons';
import { Button, Menu, useMantineTheme } from '@mantine/core';
import React from 'react';

const DownloadButton = () => {
  const theme = useMantineTheme();

  return (
    <Menu transition="fade" position="bottom-start" width={180} withinPortal>
      <Menu.Target>
        <Button
          leftIcon={<ArrowDownloadFilled fontSize={22} />}
          rightIcon={<ChevronDownFilled fontSize={18} />}
          pr={12}
        >
          Download
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<DocumentBulletListFilled fontSize={20} color={theme.colors.blue[6]} />}>
          as .odt file
        </Menu.Item>
        <Menu.Item icon={<CodeFilled fontSize={20} color={theme.colors.orange[6]} />}>
          as .html file
        </Menu.Item>
        <Menu.Item icon={<TextDescriptionFilled fontSize={20} color={theme.colors.green[6]} />}>
          as .txt file
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default DownloadButton;
