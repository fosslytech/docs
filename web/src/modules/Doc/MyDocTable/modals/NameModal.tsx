import { Button, PasswordInput, Text, TextInput } from '@mantine/core';
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

const NameModal: React.FC<Props> = ({ id, mutate }) => {
  const { sb_DocumentUpdate, isLoading } = useSbDocuments();

  const form = useForm({
    initialValues: {
      name: '',
    },

    validate: {
      name: isNotEmpty('Enter name'),
    },
  });

  const handleDeleteDoc = async (values: typeof form.values) => {
    await sb_DocumentUpdate({ id, name: values.name });

    mutate(); // Refetch data

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleDeleteDoc)}>
      <TextInput label="Document name" placeholder="Document name" mt="sm" {...form.getInputProps('name')} />

      <Button fullWidth mt="lg" type="submit" loading={isLoading}>
        Rename
      </Button>
    </form>
  );
};

export default NameModal;
