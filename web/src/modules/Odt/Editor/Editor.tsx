import React from 'react';

import { RichTextEditor } from '@mantine/tiptap';
import { Editor } from '@tiptap/react';

import Controls from './Controls';
import BubbleMenu from './PopupMenu';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import { GET_ODT_LABELS } from './labels';

interface Props {
  editor: Editor;
}

const EditorComp: React.FC<Props> = ({ editor }) => {
  const { translate } = useGlobalCtx();

  return (
    <RichTextEditor editor={editor} labels={GET_ODT_LABELS(translate)}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <Controls />
      </RichTextEditor.Toolbar>

      {editor && <BubbleMenu editor={editor} />}

      <RichTextEditor.Content />
    </RichTextEditor>
  );
};

export default EditorComp;
