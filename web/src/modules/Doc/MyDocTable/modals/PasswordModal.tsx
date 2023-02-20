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

const PasswordModal: React.FC<Props> = ({ id, mutate }) => {
  const { sb_DocumentUpdate, isLoading } = useSbDocuments();

  const form = useForm({
    initialValues: {
      password: '',
    },

    validate: {
      password: isNotEmpty('Enter password'),
    },
  });

  const handleDeleteDoc = async (values: typeof form.values) => {
    await sb_DocumentUpdate({ id, password: values.password });

    mutate(); // Refetch data

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleDeleteDoc)}>
      <Text size="sm">You'll need to input it before accessing your document</Text>

      <PasswordInput
        label="Document password"
        placeholder="*******"
        mt="sm"
        visibilityToggleIcon={({ reveal }) => (reveal ? <IconEye size={20} /> : <IconEyeOff size={20} />)}
        styles={{
          visibilityToggle: {
            marginRight: 12,
          },
        }}
        {...form.getInputProps('password')}
      />

      <Button fullWidth mt="lg" type="submit" loading={isLoading}>
        Set password
      </Button>
    </form>
  );
};

export default PasswordModal;
