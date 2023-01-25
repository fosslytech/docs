import { RichTextEditorLabels } from '@mantine/tiptap';

import content from '@content/editor/odt.json';

export const GET_ODT_LABELS = (translate: (obj: any) => string): RichTextEditorLabels => ({
  boldControlLabel: translate(content.toolbarLabels.boldControlLabel),
  italicControlLabel: translate(content.toolbarLabels.italicControlLabel),
  underlineControlLabel: translate(content.toolbarLabels.underlineControlLabel),
  strikeControlLabel: translate(content.toolbarLabels.strikeControlLabel),
  clearFormattingControlLabel: translate(content.toolbarLabels.clearFormattingControlLabel),
  highlightControlLabel: translate(content.toolbarLabels.highlightControlLabel),

  h1ControlLabel: translate(content.toolbarLabels.h1ControlLabel),
  h2ControlLabel: translate(content.toolbarLabels.h2ControlLabel),
  h3ControlLabel: translate(content.toolbarLabels.h3ControlLabel),
  h4ControlLabel: translate(content.toolbarLabels.h4ControlLabel),

  bulletListControlLabel: translate(content.toolbarLabels.bulletListControlLabel),
  orderedListControlLabel: translate(content.toolbarLabels.orderedListControlLabel),
  subscriptControlLabel: translate(content.toolbarLabels.subscriptControlLabel),
  superscriptControlLabel: translate(content.toolbarLabels.superscriptControlLabel),

  linkControlLabel: translate(content.toolbarLabels.linkControlLabel),
  unlinkControlLabel: translate(content.toolbarLabels.unlinkControlLabel),

  alignLeftControlLabel: translate(content.toolbarLabels.alignLeftControlLabel),
  alignCenterControlLabel: translate(content.toolbarLabels.alignCenterControlLabel),
  alignJustifyControlLabel: translate(content.toolbarLabels.alignJustifyControlLabel),
  alignRightControlLabel: translate(content.toolbarLabels.alignRightControlLabel),

  colorPickerControlLabel: translate(content.toolbarLabels.colorPickerControlLabel),
  unsetColorControlLabel: translate(content.toolbarLabels.unsetColorControlLabel),

  colorControlLabel: (color) => `${translate(content.toolbarLabels.colorControlLabel)} ${color}`,

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
