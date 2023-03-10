import { useResponsive } from '@hooks/use-responsive';
import { Button, Menu, useMantineTheme } from '@mantine/core';
import { Editor } from '@tiptap/react';
import React from 'react';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import {
  IconCloudDownload,
  IconChevronDown,
  IconFileText,
  IconFileDescription,
  IconCode,
  IconAlignJustified,
} from '@tabler/icons-react';

interface Props {
  editor: Editor;
}

const DownloadButton: React.FC<Props> = ({ editor }) => {
  const { translate, content } = useGlobalCtx();
  const theme = useMantineTheme();
  const { handleDownloadDocument, isLoadingDownload } = useDocCtx();

  const isSm = useResponsive('max', 'sm');

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
        <Menu.Item
          icon={<IconFileText size={20} color={theme.colors.blue[6]} />}
          onClick={() => handleDownloadDocument(editor, 'odt')}
        >
          {translate(content.pages.doc_header.download.odt)}
        </Menu.Item>
        {/* <Menu.Item
          icon={<IconFileDescription size={20} color={theme.colors.red[6]} />}
          onClick={() => handleDownloadDocument(editor, 'pdf')}
        >
          {translate(content.pages.doc_odt.download.pdf)}
        </Menu.Item> */}
        <Menu.Item
          icon={<IconCode size={20} color={theme.colors.orange[6]} />}
          onClick={() => handleDownloadDocument(editor, 'html')}
        >
          {translate(content.pages.doc_header.download.html)}
        </Menu.Item>
        <Menu.Item
          icon={<IconAlignJustified size={20} color={theme.colors.green[6]} />}
          onClick={() => handleDownloadDocument(editor, 'txt')}
        >
          {translate(content.pages.doc_header.download.txt)}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default DownloadButton;
