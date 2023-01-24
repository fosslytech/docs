import React from 'react';

import { Skeleton, useMantineTheme } from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
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
import { Color } from '@tiptap/extension-color';

import Controls from './Controls';
import BubbleMenu from './PopupMenu';

import useGlobalCtx from 'src/store/global/use-global-ctx';
import { useRouter } from 'next/router';

import { GET_ODT_LABELS } from './labels';
import { useYWebRtc } from '@hooks/yjs/use-y-webrtc';

const EditorComp = () => {
  const { translate } = useGlobalCtx();
  const theme = useMantineTheme();
  const router = useRouter();

  // const { ydoc, provider } = useY(('123311323213132' + router.query.session) as string);

  const { doc, provider } = useYWebRtc('counter-example-y-react');

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
          color: theme.colors.blue[6],
        },
      }),
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      Color,
      TextStyle,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '',
  });

  return (
    <RichTextEditor editor={editor} labels={GET_ODT_LABELS(translate)}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <Controls />
      </RichTextEditor.Toolbar>

      {editor && <BubbleMenu editor={editor} />}

      <RichTextEditor.Content />
    </RichTextEditor>
  );
};

export default EditorComp;
