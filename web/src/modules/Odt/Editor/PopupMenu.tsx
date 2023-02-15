import { RichTextEditor } from '@mantine/tiptap';
import { BubbleMenu, Editor } from '@tiptap/react';

import { IconBold, IconItalic, IconUnderline, IconStrikethrough } from '@tabler/icons';

const BoldIcon = () => <IconBold size={22} />;
const ItalicIcon = () => <IconItalic size={22} />;
const UnderlineIcon = () => <IconUnderline size={22} />;
const StrikethroughIcon = () => <IconStrikethrough size={22} />;

const PopupMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <BubbleMenu editor={editor}>
      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Bold icon={BoldIcon} w={32} h={32} />
        <RichTextEditor.Italic icon={ItalicIcon} w={32} h={32} />
        <RichTextEditor.Underline icon={UnderlineIcon} w={32} h={32} />
        <RichTextEditor.Strikethrough icon={StrikethroughIcon} w={32} h={32} />
      </RichTextEditor.ControlsGroup>
    </BubbleMenu>
  );
};

export default PopupMenu;
