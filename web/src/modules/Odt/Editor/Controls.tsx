import React from 'react';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';

import { Flex, ScrollArea, Text, useMantineTheme } from '@mantine/core';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { getOdtLabels } from './labels';

import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconClearFormatting,
  IconHighlight,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconList,
  IconListNumbers,
  IconSubscript,
  IconSuperscript,
  IconLink,
  IconUnlink,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignJustified,
  IconAlignRight,
  IconTable,
  IconTableOff,
  IconColumnInsertLeft,
  IconRowInsertTop,
  IconBackspace,
  IconCircleX,
} from '@tabler/icons';

const BoldIcon = () => <IconBold size={22} />;
const ItalicIcon = () => <IconItalic size={22} />;
const UnderlineIcon = () => <IconUnderline size={22} />;
const StrikethroughIcon = () => <IconStrikethrough size={22} />;
const ClearFormattingIcon = () => <IconClearFormatting size={22} />;
const HighlightIcon = () => <IconHighlight size={22} />;

const H1Icon = () => <IconH1 size={22} />;
const H2Icon = () => <IconH2 size={22} />;
const H3Icon = () => <IconH3 size={22} />;
const H4Icon = () => <IconH4 size={22} />;

const BulletListIcon = () => <IconList size={22} />;
const OrderedListIcon = () => <IconListNumbers size={22} />;
const SubscriptIcon = () => <IconSubscript size={22} />;
const SuperscriptIcon = () => <IconSuperscript size={22} />;

const LinkIcon = () => <IconLink size={22} />;
const LinkDismissIcon = () => <IconUnlink size={22} />;

const AlignLeftIcon = () => <IconAlignLeft size={22} />;
const AlignCenterIcon = () => <IconAlignCenter size={22} />;
const AlignJustifyIcon = () => <IconAlignJustified size={22} />;
const AlignRightIcon = () => <IconAlignRight size={22} />;

const UnsetColorIcon = () => <IconCircleX size={22} />;

const TableAddIcon = () => <IconTable size={22} />;
const TableRemoveIcon = () => <IconTableOff size={22} />;
const TableColumnAddIcon = () => <IconColumnInsertLeft size={22} />;
const TableColumnRemoveIcon = () => <IconBackspace size={22} />;
const TableRowAddIcon = () => <IconRowInsertTop size={22} />;
const TableRowRemoveIcon = () => <IconBackspace size={22} />;

const Controls = () => {
  const { translate, content } = useGlobalCtx();
  const { editor } = useRichTextEditorContext();
  const theme = useMantineTheme();

  const labels = getOdtLabels(translate, content);

  return (
    <ScrollArea type="never" style={{ width: '100%' }}>
      <Flex gap="lg" justify="center">
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} w={32} h={32} />

          <RichTextEditor.Italic icon={ItalicIcon} w={32} h={32} />
          <RichTextEditor.Underline icon={UnderlineIcon} w={32} h={32} />
          <RichTextEditor.Strikethrough icon={StrikethroughIcon} w={32} h={32} />
          <RichTextEditor.Highlight
            icon={HighlightIcon}
            w={32}
            h={32}
            onClick={() => editor?.commands?.setHighlight({ color: theme.colors[theme.primaryColor][8] })}
          />

          <RichTextEditor.ClearFormatting icon={ClearFormattingIcon} w={32} h={32} />

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
          <RichTextEditor.Unlink icon={LinkDismissIcon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft icon={AlignLeftIcon} w={32} h={32} />
          <RichTextEditor.AlignCenter icon={AlignCenterIcon} w={32} h={32} />
          <RichTextEditor.AlignJustify icon={AlignJustifyIcon} w={32} h={32} />
          <RichTextEditor.AlignRight icon={AlignRightIcon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Control
            onClick={() =>
              editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: false }).run()
            }
            aria-label={labels.tableInsertLabel}
            title={labels.tableInsertLabel}
            w={32}
            h={32}
          >
            <TableAddIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().deleteTable().run()}
            disabled={!editor?.can().deleteTable()}
            aria-label={labels.tableDeleteLabel}
            title={labels.tableDeleteLabel}
            w={32}
            h={32}
          >
            <TableRemoveIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().addRowAfter().run()}
            disabled={!editor?.can().addRowAfter()}
            aria-label={labels.rowInsertLabel}
            title={labels.rowInsertLabel}
            w={32}
            h={32}
          >
            <TableRowAddIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().deleteRow().run()}
            disabled={!editor?.can().deleteRow()}
            aria-label={labels.rowDeleteLabel}
            title={labels.rowDeleteLabel}
            w={32}
            h={32}
          >
            <TableRowRemoveIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().addColumnAfter().run()}
            disabled={!editor?.can().addColumnAfter()}
            aria-label={labels.columnInsertLabel}
            title={labels.columnInsertLabel}
            w={32}
            h={32}
          >
            <TableColumnAddIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().deleteColumn().run()}
            disabled={!editor?.can().deleteColumn()}
            aria-label={labels.columnDeleteLabel}
            title={labels.columnDeleteLabel}
            w={32}
            h={32}
          >
            <TableColumnRemoveIcon />
          </RichTextEditor.Control>
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
