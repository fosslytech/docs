import React from 'react';

import { RichTextEditor } from '@mantine/tiptap';
import { Editor } from '@tiptap/react';

import Controls from './Controls';
import BubbleMenu from './PopupMenu';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import { GET_ODT_LABELS } from './labels';
import { useOs } from '@mantine/hooks';
import { useResponsive } from '@hooks/use-responsive';

interface Props {
  editor: Editor;
}

const EditorComp: React.FC<Props> = ({ editor }) => {
  const { translate } = useGlobalCtx();

  const isSm = useResponsive('max', 'sm');
  const isMd = useResponsive('max', 'md');

  const os = useOs();

  // Keep 16px on ios and 14px on android
  const editorFontSize = isSm && os !== 'ios' ? 14 : 16;

  return (
    <RichTextEditor editor={editor} labels={GET_ODT_LABELS(translate)}>
      <RichTextEditor.Toolbar sticky stickyOffset={isMd ? 60 : 70} w="100%">
        <Controls />
      </RichTextEditor.Toolbar>

      {editor && <BubbleMenu editor={editor} />}

      <RichTextEditor.Content style={{ fontSize: editorFontSize, minHeight: '60vh' }} />
    </RichTextEditor>
  );
};

export default EditorComp;
