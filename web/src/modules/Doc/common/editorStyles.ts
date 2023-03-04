import { MantineTheme } from '@mantine/core';

export const getEditorStyles = (theme: MantineTheme) => `
.ProseMirror table .column-resize-handle {
  position: absolute;
  right: -2px;
  top: 0;
  bottom: -2px;
  width: 4px;
  background-color: ${theme.colors[theme.primaryColor][6]};
  pointer-events: none;
}

.ProseMirror table td,
.ProseMirror table th {
  min-width: 1em;
  border: 1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[6]} !important;
  padding: 5px;
  vertical-align: top;
  box-sizing: border-box;
  position: relative;
  background-clip: padding-box;
}

.ProseMirror table th {
  background-color: ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[3]};
}

.ProseMirror table .selectedCell:after {
  z-index: 2;
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${theme.colors[theme.primaryColor][4]}33; /* 20% transparency */
  pointer-events: none;

  border-left-color: red;
}
`;
