import { RichTextEditorLabels } from '@mantine/tiptap';

import { ITranslations } from '@ts/content.types';

export interface RTELabelsOdt extends RichTextEditorLabels {
  // Custom control labels
  tableInsertLabel: string;
  tableDeleteLabel: string;
  headerRowLabel: string;
  headerColumnLabel: string;
  headerCellLabel: string;
  mergeCellLabel: string;
  splitCellLabel: string;
  rowInsertBeforeLabel: string;
  rowInsertAfterLabel: string;
  rowDeleteLabel: string;
  columnInsertBeforeLabel: string;
  columnInsertAfterLabel: string;
  columnDeleteLabel: string;
}

export const getControlLabels = (translate: (obj: any) => string, content: ITranslations): RTELabelsOdt => ({
  boldControlLabel: translate(content.pages['doc_od*'].toolbarLabels.boldControlLabel),
  italicControlLabel: translate(content.pages['doc_od*'].toolbarLabels.italicControlLabel),
  underlineControlLabel: translate(content.pages['doc_od*'].toolbarLabels.underlineControlLabel),
  strikeControlLabel: translate(content.pages['doc_od*'].toolbarLabels.strikeControlLabel),
  clearFormattingControlLabel: translate(content.pages['doc_od*'].toolbarLabels.clearFormattingControlLabel),
  highlightControlLabel: translate(content.pages['doc_od*'].toolbarLabels.highlightControlLabel),

  h1ControlLabel: translate(content.pages['doc_od*'].toolbarLabels.h1ControlLabel),
  h2ControlLabel: translate(content.pages['doc_od*'].toolbarLabels.h2ControlLabel),
  h3ControlLabel: translate(content.pages['doc_od*'].toolbarLabels.h3ControlLabel),
  h4ControlLabel: translate(content.pages['doc_od*'].toolbarLabels.h4ControlLabel),

  bulletListControlLabel: translate(content.pages['doc_od*'].toolbarLabels.bulletListControlLabel),
  orderedListControlLabel: translate(content.pages['doc_od*'].toolbarLabels.orderedListControlLabel),
  subscriptControlLabel: translate(content.pages['doc_od*'].toolbarLabels.subscriptControlLabel),
  superscriptControlLabel: translate(content.pages['doc_od*'].toolbarLabels.superscriptControlLabel),

  linkControlLabel: translate(content.pages['doc_od*'].toolbarLabels.linkControlLabel),
  unlinkControlLabel: translate(content.pages['doc_od*'].toolbarLabels.unlinkControlLabel),

  alignLeftControlLabel: translate(content.pages['doc_od*'].toolbarLabels.alignLeftControlLabel),
  alignCenterControlLabel: translate(content.pages['doc_od*'].toolbarLabels.alignCenterControlLabel),
  alignJustifyControlLabel: translate(content.pages['doc_od*'].toolbarLabels.alignJustifyControlLabel),
  alignRightControlLabel: translate(content.pages['doc_od*'].toolbarLabels.alignRightControlLabel),

  tableInsertLabel: translate(content.pages['doc_od*'].toolbarLabels.tableInsertLabel),
  tableDeleteLabel: translate(content.pages['doc_od*'].toolbarLabels.tableDeleteLabel),
  headerRowLabel: translate(content.pages['doc_od*'].toolbarLabels.headerRowLabel),
  headerColumnLabel: translate(content.pages['doc_od*'].toolbarLabels.headerColumnLabel),
  headerCellLabel: translate(content.pages['doc_od*'].toolbarLabels.headerCellLabel),
  mergeCellLabel: translate(content.pages['doc_od*'].toolbarLabels.mergeCellLabel),
  splitCellLabel: translate(content.pages['doc_od*'].toolbarLabels.splitCellLabel),
  rowInsertBeforeLabel: translate(content.pages['doc_od*'].toolbarLabels.rowInsertLabel1),
  rowInsertAfterLabel: translate(content.pages['doc_od*'].toolbarLabels.rowInsertLabel2),
  rowDeleteLabel: translate(content.pages['doc_od*'].toolbarLabels.rowDeleteLabel),
  columnInsertBeforeLabel: translate(content.pages['doc_od*'].toolbarLabels.columnInsertLabel1),
  columnInsertAfterLabel: translate(content.pages['doc_od*'].toolbarLabels.columnInsertLabel2),
  columnDeleteLabel: translate(content.pages['doc_od*'].toolbarLabels.columnDeleteLabel),

  colorPickerControlLabel: translate(content.pages['doc_od*'].toolbarLabels.colorPickerControlLabel),
  unsetColorControlLabel: translate(content.pages['doc_od*'].toolbarLabels.unsetColorControlLabel),

  colorControlLabel: (color) =>
    `${translate(content.pages['doc_od*'].toolbarLabels.colorControlLabel)} ${color}`,

  // Color picker control
  colorPickerCancel: 'Cancel',
  colorPickerClear: 'Clear color',
  colorPickerColorPicker: 'Color picker',
  colorPickerPalette: 'Color palette',
  colorPickerSave: 'Save',
  colorPickerColorLabel: (color) => `Set text color ${color}`,

  // -----------------------------------------
  // Unused in editor, default to english
  // -----------------------------------------

  h5ControlLabel: 'Heading 5',
  h6ControlLabel: 'Heading 6',

  linkEditorInputLabel: 'Enter URL',
  linkEditorInputPlaceholder: 'https://example.com/',
  linkEditorExternalLink: 'Open link in a new tab',
  linkEditorInternalLink: 'Open link in the same tab',
  linkEditorSave: 'Save',

  blockquoteControlLabel: 'Blockquote',

  codeControlLabel: 'Code',
  codeBlockControlLabel: 'Code block',

  hrControlLabel: 'Horizontal line',
});
