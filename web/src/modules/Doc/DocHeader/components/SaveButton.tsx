import { Button, Group, Text, Tooltip } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import { IconCloudUpload, IconDeviceFloppy, IconRefresh } from '@tabler/icons-react';
import { useResponsive } from '@hooks/use-responsive';
import { Editor } from '@tiptap/react';
import { openModal } from '@mantine/modals';
import SaveModal from './SaveModal';
import { UpdateDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';
import useDocCtx from 'src/store/doc/use-doc-ctx';

interface Props {
  editor: Editor;
}

const SaveButton: React.FC<Props> = ({ editor }) => {
  const { initialDocId, initialDocPassword } = useDocCtx();
  const docMutation = useCommonDocMutation<UpdateDocDTO>('/api/doc/html', 'PATCH');

  const [docState, setDocState] = useState<'dirty' | 'unsaved'>('unsaved');

  const isSm = useResponsive('max', 'sm');

  // If state is "unsaved"
  const handleSaveDoc = () => {
    return openModal({
      title: (
        <Text size="lg" fw={600}>
          Save your document
        </Text>
      ),
      centered: true,
      children: <SaveModal editor={editor} />,
    });
  };

  // If state is "dirty"
  const handleUpdateDoc = async () => {
    await docMutation.mutateAsync({
      html: editor.getHTML(),
      id: initialDocId,
      password1: initialDocPassword,
    });
  };

  // Check if user opened existing doc or created new
  useEffect(() => {
    if (initialDocId && docState === 'unsaved') {
      setDocState('dirty');
    }
  }, [initialDocId]);

  // Button content

  const btnText = {
    dirty: 'Sync',
    unsaved: 'Save',
  };

  const btnLabel = {
    dirty: 'Sync any new changes made',
    unsaved: 'Save your document for later',
  };

  const btnIcon = {
    dirty: <IconDeviceFloppy size={22} />,
    unsaved: <IconCloudUpload size={22} />,
  };

  const btnFunction = {
    dirty: handleUpdateDoc,
    unsaved: handleSaveDoc,
  };

  return (
    <Group>
      <Tooltip label={btnLabel[docState]} position="bottom">
        <Button
          leftIcon={!isSm && btnIcon[docState]}
          disabled={['clean'].includes(docState)}
          onClick={btnFunction[docState]}
          loading={docMutation.isLoading}
        >
          {btnText[docState]}
        </Button>
      </Tooltip>
    </Group>
  );
};

export default SaveButton;
