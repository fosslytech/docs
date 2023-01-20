import React from 'react';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';

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
import { Text } from '@mantine/core';

const Controls = () => {
  const { editor } = useRichTextEditorContext();

  return (
    <>
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
        <RichTextEditor.Highlight icon={() => <HighlightFilled fontSize={20} />} w={32} h={32} />
        {/* <RichTextEditor.Code icon={() => <CodeFilled fontSize={20} />} w={32} h={32} /> */}
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.H1
          icon={() => (
            <Text size={14} fw={600}>
              H1
            </Text>
          )}
          w={32}
          h={32}
        />
        <RichTextEditor.H2
          icon={() => (
            <Text size={14} fw={600}>
              H2
            </Text>
          )}
          w={32}
          h={32}
        />
        <RichTextEditor.H3
          icon={() => (
            <Text size={14} fw={600}>
              H3
            </Text>
          )}
          w={32}
          h={32}
        />
        <RichTextEditor.H4
          icon={() => (
            <Text size={14} fw={600}>
              H4
            </Text>
          )}
          w={32}
          h={32}
        />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        {/* <RichTextEditor.Blockquote />
        <RichTextEditor.Hr /> */}
        <RichTextEditor.BulletList icon={() => <TextBulletListLtrFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.OrderedList icon={() => <TextNumberListLtrFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.Subscript icon={() => <TextSubscriptFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.Superscript icon={() => <TextSuperscriptFilled fontSize={20} />} w={32} h={32} />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Link icon={() => <LinkFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.Unlink icon={() => <LinkDismissFilled fontSize={20} />} w={32} h={32} />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.AlignLeft icon={() => <TextAlignLeftFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.AlignCenter icon={() => <TextAlignCenterFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.AlignJustify icon={() => <TextAlignJustifyFilled fontSize={20} />} w={32} h={32} />
        <RichTextEditor.AlignRight icon={() => <TextAlignRightFilled fontSize={20} />} w={32} h={32} />
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
        <RichTextEditor.UnsetColor icon={() => <DismissCircleRegular fontSize={20} />} w={32} h={32} />
      </RichTextEditor.ControlsGroup>
    </>
  );
};

export default Controls;
