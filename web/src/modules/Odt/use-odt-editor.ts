import { useRouter } from 'next/router';

import { MANTINE_COLORS, useMantineTheme } from '@mantine/core';
import { Link } from '@mantine/tiptap';

import { useEditor } from '@tiptap/react';

import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import Collaboration from '@tiptap/extension-collaboration';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import TextStyle from '@tiptap/extension-text-style';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import { Color } from '@tiptap/extension-color';

import useDocContentCtx from 'src/store/doc-content/use-doc-content-ctx';
import { useYWebRtc } from '@hooks/yjs/use-y-webrtc';
import useNonInitialEffect from '@hooks/use-non-initial-effect';
import { getRandomInt } from '@utils/functions/randomNumber';

export const MAX_CONNS_ODT = 2;

export const useOdtEditor = () => {
  const router = useRouter();
  const theme = useMantineTheme();
  const { initialDocContent, setInitialContent } = useDocContentCtx();

  const { doc, provider } = useYWebRtc(router.query.session as string, {
    maxConns: MAX_CONNS_ODT,
    filterBcConns: true,
  });

  const userColor = MANTINE_COLORS[getRandomInt(0, 13)];

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Collaboration.configure({
        document: doc,
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: 'Anon',
          color: theme.colors[userColor][6],
          colorName: userColor,
        },
      }),
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight.configure({
        multicolor: true,
      }),
      Color,
      TextStyle,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),

      // Table support
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'my-custom-paragraph',
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialDocContent || `<br/><br/><br/><br/><br/><br/><br/><br/><br/>`,
  });

  // Remove initial content
  useNonInitialEffect(() => {
    if (initialDocContent.length) setInitialContent('');
  }, [initialDocContent]);

  const connectedUsers = Array.from(provider.awareness.getStates(), ([id, { cursor, user }]) => ({
    name: user?.name || 'Anon',
    color: user?.color || theme.colors.blue[6],
    colorName: user?.colorName || 'blue',
  }));

  return {
    editor,
    connectedUsers,
    isConnected: provider.connected,
    isFull: connectedUsers?.length > MAX_CONNS_ODT,
  };
};
