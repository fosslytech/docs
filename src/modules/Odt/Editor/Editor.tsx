import React, { useEffect, useState } from 'react';

import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';

import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';

import Controls from './Controls';
import BubbleMenu from './PopupMenu';
import { Loader, LoadingOverlay, Skeleton } from '@mantine/core';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

const Editor = () => {
  const [loading, setLoading] = useState(true);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      Color,
      TextStyle,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);

    return () => clearTimeout(t);
  }, []);

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        {loading ? <Skeleton height={32} w="70%" radius="sm" /> : <Controls />}
      </RichTextEditor.Toolbar>

      {/* {editor && <BubbleMenu editor={editor} />} */}

      {loading ? (
        <>
          <Skeleton height={12} ml="35%" mt={24} w="30%" radius="xl" />

          <Skeleton height={10} ml={12} my={24} w="45%" radius="xl" />
          <Skeleton height={8} ml={12} my={12} w="35%" radius="xl" />
          <Skeleton height={8} ml={12} my={12} w="35%" radius="xl" />
          <Skeleton height={8} ml={12} mb={24} w="30%" radius="xl" />
        </>
      ) : (
        <RichTextEditor.Content />
      )}
    </RichTextEditor>
  );
};

export default Editor;
