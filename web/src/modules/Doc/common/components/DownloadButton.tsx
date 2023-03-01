import { useResponsive } from '@hooks/use-responsive';
import { Button, MantineTheme, Menu, useMantineTheme } from '@mantine/core';
import { Editor } from '@tiptap/react';
import React from 'react';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import {
  IconCloudDownload,
  IconChevronDown,
  IconFileText,
  IconFileSpreadsheet,
  IconTable,
  IconCode,
  IconAlignJustified,
  IconFileDescription,
  IconPdf,
  IconPhoto,
  IconAlignBoxLeftMiddle,
  IconListDetails,
  IconPilcrow,
  IconTypography,
} from '@tabler/icons-react';
import { ITranslations } from '@ts/content.types';
import useDetectAppType from '@module/Doc/use-detect-app-type';
import { ISupportedOutputExtensions } from '@ts/global.types';

interface Props {
  editor: Editor;
}

interface MenuItem {
  text: string;
  icon: any;
  type: ISupportedOutputExtensions;
}

// Text editor download options

const getMenuItemsOdt = (content: ITranslations, theme: MantineTheme): MenuItem[] => [
  {
    text: content.pages.doc_header.download.odt,
    icon: <IconTypography size={20} color={theme.colors.blue[6]} />,
    type: 'odt',
  },
  // {
  //   text: content.pages.doc_header.download.pdf,
  //   icon: <IconPhoto size={20} color={theme.colors.red[6]} />,
  //   type: 'pdf',
  // },
  {
    text: content.pages.doc_header.download.html,
    icon: <IconCode size={20} color={theme.colors.orange[6]} />,
    type: 'html',
  },
  {
    text: content.pages.doc_header.download.txt,
    icon: <IconAlignJustified size={20} color={theme.colors.teal[6]} />,
    type: 'txt',
  },
];

// Spreadsheet editor download options

const getMenuItemsOds = (content: ITranslations, theme: MantineTheme): MenuItem[] => [
  {
    text: content.pages.doc_header.download.ods,
    icon: <IconTable size={20} color={theme.colors.green[6]} />,
    type: 'ods',
  },
  {
    text: content.pages.doc_header.download.html,
    icon: <IconCode size={20} color={theme.colors.orange[6]} />,
    type: 'html',
  },
];

const DownloadButton: React.FC<Props> = ({ editor }) => {
  const { translate, content } = useGlobalCtx();
  const { handleDownloadDocument, isLoadingDownload } = useDocCtx();

  const appType = useDetectAppType();
  const isSm = useResponsive('max', 'sm');
  const theme = useMantineTheme();

  const menuItems = {
    odt: getMenuItemsOdt(content, theme),
    ods: getMenuItemsOds(content, theme),
  };

  return (
    <Menu transition="fade" position="bottom-start" width={180} withinPortal>
      <Menu.Target>
        <Button
          leftIcon={!isSm && <IconCloudDownload size={22} />}
          rightIcon={<IconChevronDown size={18} />}
          pr={12}
          loading={isLoadingDownload}
        >
          {translate(content.pages.doc_header.download.button)}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {appType &&
          menuItems[appType].map((item) => (
            <Menu.Item icon={item.icon} onClick={() => handleDownloadDocument(editor, item.type)}>
              {translate(item.text)}
            </Menu.Item>
          ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default DownloadButton;
