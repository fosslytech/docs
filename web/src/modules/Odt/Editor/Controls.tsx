import React from 'react';
import { RichTextEditor } from '@mantine/tiptap';

import {
  DismissCircleRegular,
  HighlightFilled,
  LinkDismissFilled,
  LinkFilled,
  TextAlignCenterFilled,
  TextAlignJustifyFilled,
  TextAlignLeftFilled,
  TextAlignRightFilled,
  TextBoldFilled,
  TextBulletListLtrFilled,
  TextClearFormattingFilled,
  TextItalicFilled,
  TextNumberListLtrFilled,
  TextStrikethroughFilled,
  TextSubscriptFilled,
  TextSuperscriptFilled,
  TextUnderlineFilled,
} from '@fluentui/react-icons';
import { Flex, ScrollArea, Text } from '@mantine/core';
import { IconBold } from '@tabler/icons';

const BoldIcon = () => <TextBoldFilled fontSize={20} />;
const ItalicIcon = () => <TextItalicFilled fontSize={20} />;
const UnderlineIcon = () => <TextUnderlineFilled fontSize={20} />;
const StrikethroughIcon = () => <TextStrikethroughFilled fontSize={20} />;
const ClearFormattingIcon = () => <TextClearFormattingFilled fontSize={20} />;
const HighlightIcon = () => <HighlightFilled fontSize={20} />;

// prettier-ignore
const H1Icon = () => <Text size={14} fw={600}>H1</Text>
// prettier-ignore
const H2Icon = () => <Text size={14} fw={600}>H2</Text>
// prettier-ignore
const H3Icon = () => <Text size={14} fw={600}>H3</Text>
// prettier-ignore
const H4Icon = () => <Text size={14} fw={600}>H4</Text>

const BulletListIcon = () => <TextBulletListLtrFilled fontSize={20} />;
const OrderedListIcon = () => <TextNumberListLtrFilled fontSize={20} />;
const SubscriptIcon = () => <TextSubscriptFilled fontSize={20} />;
const SuperscriptIcon = () => <TextSuperscriptFilled fontSize={20} />;

const LinkIcon = () => <LinkFilled fontSize={20} />;
const LinkDIsmissIcon = () => <LinkDismissFilled fontSize={20} />;

const AlignLeftIcon = () => <TextAlignLeftFilled fontSize={20} />;
const AlignCenterIcon = () => <TextAlignCenterFilled fontSize={20} />;
const AlignJustifyIcon = () => <TextAlignJustifyFilled fontSize={20} />;
const AlignRightIcon = () => <TextAlignRightFilled fontSize={20} />;

const UnsetColorIcon = () => <DismissCircleRegular fontSize={20} />;

const Controls = () => {
  return (
    <ScrollArea type="never" style={{ width: '100%' }}>
      <Flex w={820} gap="lg">
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} w={32} h={32} />
          <RichTextEditor.Italic icon={ItalicIcon} w={32} h={32} />
          <RichTextEditor.Underline icon={UnderlineIcon} w={32} h={32} />
          <RichTextEditor.Strikethrough icon={StrikethroughIcon} w={32} h={32} />
          <RichTextEditor.ClearFormatting icon={ClearFormattingIcon} w={32} h={32} />
          <RichTextEditor.Highlight icon={HighlightIcon} w={32} h={32} />

          {/* <RichTextEditor.Code icon={() => <CodeFilled fontSize={20} />} w={32} h={32} /> */}
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 icon={H1Icon} w={32} h={32} />
          <RichTextEditor.H2 icon={H2Icon} w={32} h={32} />
          <RichTextEditor.H3 icon={H3Icon} w={32} h={32} />
          <RichTextEditor.H4 icon={H4Icon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          {/* <RichTextEditor.Blockquote />
        <RichTextEditor.Hr /> */}
          <RichTextEditor.BulletList icon={BulletListIcon} w={32} h={32} />
          <RichTextEditor.OrderedList icon={OrderedListIcon} w={32} h={32} />
          <RichTextEditor.Subscript icon={SubscriptIcon} w={32} h={32} />
          <RichTextEditor.Superscript icon={SuperscriptIcon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link icon={LinkIcon} w={32} h={32} />
          <RichTextEditor.Unlink icon={LinkDIsmissIcon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft icon={AlignLeftIcon} w={32} h={32} />
          <RichTextEditor.AlignCenter icon={AlignCenterIcon} w={32} h={32} />
          <RichTextEditor.AlignJustify icon={AlignJustifyIcon} w={32} h={32} />
          <RichTextEditor.AlignRight icon={AlignRightIcon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.ColorPicker
            colors={[
              '#25262b',
              '#868e96',
              '#fa5252',
              '#e64980',
              '#be4bdb',
              '#7950f2',
              '#4c6ef5',
              '#228be6',
              '#15aabf',
              '#12b886',
              '#40c057',
              '#82c91e',
              '#fab005',
              '#fd7e14',
            ]}
            w={32}
            h={32}
          />
          <RichTextEditor.UnsetColor icon={UnsetColorIcon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>
      </Flex>
    </ScrollArea>
  );
};

export default Controls;
