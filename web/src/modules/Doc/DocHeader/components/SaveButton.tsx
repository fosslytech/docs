import { Button, Group, Text, Tooltip } from '@mantine/core';
import React, { useState } from 'react';

import { IconCloudUpload } from '@tabler/icons-react';
import { useResponsive } from '@hooks/use-responsive';
import { Editor } from '@tiptap/react';
import { openModal } from '@mantine/modals';
import SaveModal from './SaveModal';

interface Props {
  editor: Editor;
}

const SaveButton: React.FC<Props> = ({ editor }) => {
  const [docState, setDocState] = useState<'dirty' | 'clean' | 'unsaved'>('unsaved');

  const isSm = useResponsive('max', 'sm');

  // If state is "unsaved"
  const handleSaveDoc = () => {
    return openModal({
      title: (
        <Text size="lg" fw={600}>
          Save your document{' '}
        </Text>
      ),
      centered: true,
      children: <SaveModal editor={editor} />,
    });
  };

  // Button content

  const btnText = {
    dirty: 'Update!',
    clean: 'Up to date!',
    unsaved: 'Save',
  };

  const btnLabel = {
    dirty: 'You have to manually save new changes',
    clean: 'You made no changes to the document',
    unsaved: 'Save your document for later',
  };

  const btnFunction = {
    dirty: () => {},
    clean: () => {},
    unsaved: () => handleSaveDoc(),
  };

  return (
    <Group>
      <Tooltip label={btnLabel[docState]} position="bottom">
        <Button
          leftIcon={!isSm && <IconCloudUpload size={22} />}
          disabled={['clean'].includes(docState)}
          onClick={btnFunction[docState]}
        >
          {btnText[docState]}
        </Button>
      </Tooltip>
    </Group>
  );
};

export default SaveButton;
