import { TextBoldFilled, TextItalicFilled } from '@fluentui/react-icons';
import { RichTextEditor } from '@mantine/tiptap';
import { BubbleMenu, Editor } from '@tiptap/react';
import React from 'react';

const PopupMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <BubbleMenu editor={editor}>
      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Bold icon={() => <TextBoldFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.Italic icon={() => <TextItalicFilled fontSize={20} />} w={32} h={32} />
      </RichTextEditor.ControlsGroup>
    </BubbleMenu>
  );
};

export default PopupMenu;
