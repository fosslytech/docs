import React from 'react';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';

import {
  DismissCircleRegular,
  HighlightFilled,
  LinkDismissFilled,
  LinkFilled,
  TableDeleteColumnFilled,
  TableDeleteRowFilled,
  TableDismissFilled,
  TableFilled,
  TableInsertColumnFilled,
  TableInsertRowFilled,
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
import { Flex, ScrollArea, Text, useMantineTheme } from '@mantine/core';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { getOdtLabels } from './labels';

export const tableHTML = `
  <table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </table>
`;

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

const TableAddIcon = () => <TableFilled fontSize={20} />;
const TableRemoveIcon = () => <TableDismissFilled fontSize={20} />;
const TableColumnAddIcon = () => <TableInsertColumnFilled fontSize={20} />;
const TableColumnRemoveIcon = () => <TableDeleteColumnFilled fontSize={20} />;
const TableRowAddIcon = () => <TableInsertRowFilled fontSize={20} />;
const TableRowRemoveIcon = () => <TableDeleteRowFilled fontSize={20} />;

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
          <RichTextEditor.Unlink icon={LinkDIsmissIcon} w={32} h={32} />
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
