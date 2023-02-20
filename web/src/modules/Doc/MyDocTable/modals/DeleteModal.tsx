import { Button, PasswordInput, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React from 'react';
import { useSbDocuments } from 'src/api/doc/use-sb-documents';
import { KeyedMutator } from 'swr';

interface Props {
  id: string;
  mutate: KeyedMutator<any>;
}

const DeleteModal: React.FC<Props> = ({ id, mutate }) => {
  const { sb_DocumentDelete, isLoading } = useSbDocuments();

  const handleDeleteDoc = async () => {
    await sb_DocumentDelete({ id });

    mutate(); // Refetch data

    closeAllModals();
  };

  return (
    <>
      <Text size="sm">This action is irreversible, you won't be able to recover your document later</Text>

      <Button fullWidth mt="lg" onClick={handleDeleteDoc} loading={isLoading} color="red">
        Delete document
      </Button>
    </>
  );
};

export default DeleteModal;
