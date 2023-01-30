import {
  ArrowDownloadFilled,
  ChevronDownFilled,
  CodeFilled,
  DocumentBulletListFilled,
  DocumentPdfFilled,
  TextDescriptionFilled,
} from '@fluentui/react-icons';
import { Button, Menu, useMantineTheme } from '@mantine/core';
import { Editor } from '@tiptap/react';
import React from 'react';
import useDocContentCtx from 'src/store/doc-content/use-doc-content-ctx';

interface Props {
  editor: Editor;
}

const DownloadButton: React.FC<Props> = ({ editor }) => {
  const theme = useMantineTheme();
  const { handleDownloadDocument, isLoadingDownload } = useDocContentCtx();

  return (
    <Menu transition="fade" position="bottom-start" width={180} withinPortal>
      <Menu.Target>
        <Button
          leftIcon={<ArrowDownloadFilled fontSize={22} />}
          rightIcon={<ChevronDownFilled fontSize={18} />}
          pr={12}
          // loading={isLoadingDownload}
        >
          Download
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={<DocumentBulletListFilled fontSize={20} color={theme.colors.blue[6]} />}
          onClick={() => handleDownloadDocument(editor, 'odt')}
        >
          as .odt file
        </Menu.Item>
        {/* <Menu.Item
          icon={<DocumentPdfFilled fontSize={20} color={theme.colors.red[6]} />}
          onClick={() => handleDownloadDocument(editor, 'pdf')}
        >
          as .pdf file
        </Menu.Item> */}
        <Menu.Item
          icon={<CodeFilled fontSize={20} color={theme.colors.orange[6]} />}
          onClick={() => handleDownloadDocument(editor, 'html')}
        >
          as .html file
        </Menu.Item>
        <Menu.Item
          icon={<TextDescriptionFilled fontSize={20} color={theme.colors.green[6]} />}
          onClick={() => handleDownloadDocument(editor, 'txt')}
        >
          as .txt file
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default DownloadButton;
