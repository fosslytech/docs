import React from 'react';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';

import { Flex, ScrollArea, useMantineTheme } from '@mantine/core';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import {
  IconBold,
  IconItalic,
  IconStrikethrough,
  IconClearFormatting,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignJustified,
  IconAlignRight,
  IconColumnInsertLeft,
  IconRowInsertTop,
  IconBackspace,
  IconLayoutSidebar,
  IconLayoutNavbar,
  IconColumnInsertRight,
  IconRowInsertBottom,
  IconSection,
  IconUnderline,
  IconLayersIntersect,
  IconLayersSubtract,
} from '@tabler/icons-react';
import { getControlLabels } from '@module/Doc/common/labels';

const BoldIcon = () => <IconBold size={22} />;
const ItalicIcon = () => <IconItalic size={22} />;
const UnderlineIcon = () => <IconUnderline size={22} />;
const StrikethroughIcon = () => <IconStrikethrough size={22} />;
const ClearFormattingIcon = () => <IconClearFormatting size={22} />;

const AlignLeftIcon = () => <IconAlignLeft size={22} />;
const AlignCenterIcon = () => <IconAlignCenter size={22} />;
const AlignJustifyIcon = () => <IconAlignJustified size={22} />;
const AlignRightIcon = () => <IconAlignRight size={22} />;

const TableHeadRowIcon = () => <IconLayoutNavbar size={22} />;
const TableHeadColumnIcon = () => <IconLayoutSidebar size={22} />;
const TableHeadCellIcon = () => <IconSection size={22} />;

const TableCellCombineIcon = () => <IconLayersIntersect size={22} />;
const TableCellSplitIcon = () => <IconLayersSubtract size={22} />;

const TableColumnBeforeAddIcon = () => <IconColumnInsertLeft size={22} />;
const TableColumnAfterAddIcon = () => <IconColumnInsertRight size={22} />;
const TableColumnRemoveIcon = () => <IconBackspace size={22} />;
const TableRowBeforeAddIcon = () => <IconRowInsertTop size={22} />;
const TableRowAfterAddIcon = () => <IconRowInsertBottom size={22} />;
const TableRowRemoveIcon = () => <IconBackspace size={22} />;

const Controls = () => {
  const { translate, content } = useGlobalCtx();
  const { editor } = useRichTextEditorContext();
  const theme = useMantineTheme();

  const labels = getControlLabels(translate, content);

  return (
    <ScrollArea type="never" style={{ width: '100%' }}>
      <Flex gap="lg" justify="center">
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} w={32} h={32} />
          <RichTextEditor.Italic icon={ItalicIcon} w={32} h={32} />
          <RichTextEditor.Underline icon={UnderlineIcon} w={32} h={32} />
          <RichTextEditor.Strikethrough icon={StrikethroughIcon} w={32} h={32} />
          <RichTextEditor.ClearFormatting icon={ClearFormattingIcon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft icon={AlignLeftIcon} w={32} h={32} />
          <RichTextEditor.AlignCenter icon={AlignCenterIcon} w={32} h={32} />
          <RichTextEditor.AlignJustify icon={AlignJustifyIcon} w={32} h={32} />
          <RichTextEditor.AlignRight icon={AlignRightIcon} w={32} h={32} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().toggleHeaderRow().run()}
            disabled={!editor?.can().addRowAfter()}
            aria-label={labels.headerRowLabel}
            title={labels.headerRowLabel}
            w={32}
            h={32}
          >
            <TableHeadRowIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().toggleHeaderColumn().run()}
            disabled={!editor?.can().deleteRow()}
            aria-label={labels.headerColumnLabel}
            title={labels.headerColumnLabel}
            w={32}
            h={32}
          >
            <TableHeadColumnIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().toggleHeaderCell().run()}
            disabled={!editor?.can().deleteRow()}
            aria-label={labels.headerCellLabel}
            title={labels.headerCellLabel}
            w={32}
            h={32}
          >
            <TableHeadCellIcon />
          </RichTextEditor.Control>

          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().mergeCells().run()}
            disabled={!editor?.can().deleteRow()}
            aria-label={labels.mergeCellLabel}
            title={labels.mergeCellLabel}
            w={32}
            h={32}
          >
            <TableCellCombineIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().splitCell().run()}
            disabled={!editor?.can().deleteRow()}
            aria-label={labels.splitCellLabel}
            title={labels.splitCellLabel}
            w={32}
            h={32}
          >
            <TableCellSplitIcon />
          </RichTextEditor.Control>

          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().addRowBefore().run()}
            disabled={!editor?.can().addRowAfter()}
            aria-label={labels.rowInsertBeforeLabel}
            title={labels.rowInsertBeforeLabel}
            w={32}
            h={32}
          >
            <TableRowBeforeAddIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().addRowAfter().run()}
            disabled={!editor?.can().addRowAfter()}
            aria-label={labels.rowInsertAfterLabel}
            title={labels.rowInsertAfterLabel}
            w={32}
            h={32}
          >
            <TableRowAfterAddIcon />
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
            onClick={() => editor?.chain().focus().addColumnBefore().run()}
            disabled={!editor?.can().addColumnAfter()}
            aria-label={labels.columnInsertBeforeLabel}
            title={labels.columnInsertBeforeLabel}
            w={32}
            h={32}
          >
            <TableColumnBeforeAddIcon />
          </RichTextEditor.Control>
          <RichTextEditor.Control
            onClick={() => editor?.chain().focus().addColumnAfter().run()}
            disabled={!editor?.can().addColumnAfter()}
            aria-label={labels.columnInsertAfterLabel}
            title={labels.columnInsertAfterLabel}
            w={32}
            h={32}
          >
            <TableColumnAfterAddIcon />
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
      </Flex>
    </ScrollArea>
  );
};

export default Controls;
