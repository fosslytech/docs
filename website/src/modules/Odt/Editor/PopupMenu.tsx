import {
  TextBoldFilled,
  TextClearFormattingFilled,
  TextItalicFilled,
  TextStrikethroughFilled,
  TextUnderlineFilled,
} from '@fluentui/react-icons';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import { BubbleMenu, Editor } from '@tiptap/react';

const PopupMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <BubbleMenu editor={editor}>
      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Bold icon={() => <TextBoldFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.Italic icon={() => <TextItalicFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.Underline icon={() => <TextUnderlineFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.Strikethrough icon={() => <TextStrikethroughFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.ClearFormatting
          icon={() => <TextClearFormattingFilled fontSize={20} />}
          w={32}
          h={32}
        />
      </RichTextEditor.ControlsGroup>
    </BubbleMenu>
  );
};

export default PopupMenu;
