import { Button, Group, Text, Tooltip } from '@mantine/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { IconCloudUpload, IconDeviceFloppy, IconRefresh } from '@tabler/icons-react';
import { useResponsive } from '@hooks/use-responsive';
import { Editor } from '@tiptap/react';
import { openModal } from '@mantine/modals';
import SaveModal from './SaveModal';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import useBeforeunload from '@hooks/use-beforeunload';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  editor: Editor;
}

const SaveButton: React.FC<Props> = ({ editor }) => {
  const { translate, content } = useGlobalCtx();
  const { initialDocId, handleSyncMyDocument } = useDocCtx();
  const [isLoading, setLoading] = useState(false);

  const docStateRef = useRef<'dirty' | 'clean' | 'unsaved'>('unsaved');

  const isSm = useResponsive('max', 'sm');

  // If state is "unsaved"
  const handleSaveDoc = () => {
    return openModal({
      title: (
        <Text size="lg" fw={600}>
          {translate(content.pages.doc_header.save.modalTitle)}
        </Text>
      ),
      centered: true,
      children: <SaveModal editor={editor} />,
    });
  };

  // If state is "dirty"
  const handleUpdateDoc = async () => {
    setLoading(true);
    await handleSyncMyDocument(editor);
    setLoading(false);

    docStateRef.current = 'clean';
  };

  // Check if user opened existing doc or created new

  useEffect(() => {
    if (initialDocId && docStateRef.current === 'unsaved') {
      docStateRef.current = 'dirty';
    }
  }, [initialDocId]);

  // Check if there are changes on document
  useEffect(() => {
    if (!editor) return;

    const handler = () => {
      if (docStateRef.current === 'clean') docStateRef.current = 'dirty';
    };

    editor.on('update', handler);

    return () => {
      editor.off('update', handler);
    };
  }, []);

  // Warn user if there are changes made
  useBeforeunload(['dirty', 'unsaved'].includes(docStateRef.current));

  // Button content

  const btnText = {
    dirty: translate(content.pages.doc_header.save.btnDirty),
    clean: translate(content.pages.doc_header.save.btnClean),
    unsaved: translate(content.pages.doc_header.save.btnUnsaved),
  };

  const btnLabel = {
    dirty: translate(content.pages.doc_header.save.labelDirty),
    clean: translate(content.pages.doc_header.save.labelClean),
    unsaved: translate(content.pages.doc_header.save.labelUnsaved),
  };

  const btnIcon = {
    dirty: <IconDeviceFloppy size={22} />,
    clean: <IconDeviceFloppy size={22} />,
    unsaved: <IconCloudUpload size={22} />,
  };

  const btnFunction = {
    dirty: handleUpdateDoc,
    unsaved: handleSaveDoc,
  };

  return (
    <Group>
      <Tooltip label={btnLabel[docStateRef.current]} position="bottom">
        <Button
          leftIcon={!isSm && btnIcon[docStateRef.current]}
          disabled={['clean'].includes(docStateRef.current)}
          onClick={btnFunction[docStateRef.current]}
          loading={isLoading}
        >
          {btnText[docStateRef.current]}
        </Button>
      </Tooltip>
    </Group>
  );
};

export default SaveButton;
