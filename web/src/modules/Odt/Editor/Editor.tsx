import React from 'react';

import { RichTextEditor } from '@mantine/tiptap';
import { Editor } from '@tiptap/react';

import Controls from './Controls';
import BubbleMenu from './PopupMenu';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import { GET_ODT_LABELS } from './labels';
import { useOs, useViewportSize } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

interface Props {
  editor: Editor;
}

const EditorComp: React.FC<Props> = ({ editor }) => {
  const { translate } = useGlobalCtx();
  const screen = useViewportSize();
  const theme = useMantineTheme();
  const os = useOs();

  // Keep 16px on ios and 14px on android
  const editorFontSize = screen.width < theme.breakpoints.sm && os !== 'ios' ? 14 : 16;

  return (
    <RichTextEditor editor={editor} labels={GET_ODT_LABELS(translate)}>
      <RichTextEditor.Toolbar sticky stickyOffset={60} w="100%">
        <Controls />
      </RichTextEditor.Toolbar>

      {editor && <BubbleMenu editor={editor} />}

      <RichTextEditor.Content style={{ fontSize: editorFontSize }} />
    </RichTextEditor>
  );
};

export default EditorComp;
