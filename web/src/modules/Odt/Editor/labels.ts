import { RichTextEditorLabels } from '@mantine/tiptap';

import { ITranslations } from '@ts/global.types';

export const getOdtLabels = (
  translate: (obj: any) => string,
  content: ITranslations
): RichTextEditorLabels => ({
  boldControlLabel: translate(content.pages.doc_odt.toolbarLabels.boldControlLabel),
  italicControlLabel: translate(content.pages.doc_odt.toolbarLabels.italicControlLabel),
  underlineControlLabel: translate(content.pages.doc_odt.toolbarLabels.underlineControlLabel),
  strikeControlLabel: translate(content.pages.doc_odt.toolbarLabels.strikeControlLabel),
  clearFormattingControlLabel: translate(content.pages.doc_odt.toolbarLabels.clearFormattingControlLabel),
  highlightControlLabel: translate(content.pages.doc_odt.toolbarLabels.highlightControlLabel),

  h1ControlLabel: translate(content.pages.doc_odt.toolbarLabels.h1ControlLabel),
  h2ControlLabel: translate(content.pages.doc_odt.toolbarLabels.h2ControlLabel),
  h3ControlLabel: translate(content.pages.doc_odt.toolbarLabels.h3ControlLabel),
  h4ControlLabel: translate(content.pages.doc_odt.toolbarLabels.h4ControlLabel),

  bulletListControlLabel: translate(content.pages.doc_odt.toolbarLabels.bulletListControlLabel),
  orderedListControlLabel: translate(content.pages.doc_odt.toolbarLabels.orderedListControlLabel),
  subscriptControlLabel: translate(content.pages.doc_odt.toolbarLabels.subscriptControlLabel),
  superscriptControlLabel: translate(content.pages.doc_odt.toolbarLabels.superscriptControlLabel),

  linkControlLabel: translate(content.pages.doc_odt.toolbarLabels.linkControlLabel),
  unlinkControlLabel: translate(content.pages.doc_odt.toolbarLabels.unlinkControlLabel),

  alignLeftControlLabel: translate(content.pages.doc_odt.toolbarLabels.alignLeftControlLabel),
  alignCenterControlLabel: translate(content.pages.doc_odt.toolbarLabels.alignCenterControlLabel),
  alignJustifyControlLabel: translate(content.pages.doc_odt.toolbarLabels.alignJustifyControlLabel),
  alignRightControlLabel: translate(content.pages.doc_odt.toolbarLabels.alignRightControlLabel),

  colorPickerControlLabel: translate(content.pages.doc_odt.toolbarLabels.colorPickerControlLabel),
  unsetColorControlLabel: translate(content.pages.doc_odt.toolbarLabels.unsetColorControlLabel),

  colorControlLabel: (color) =>
    `${translate(content.pages.doc_odt.toolbarLabels.colorControlLabel)} ${color}`,

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
