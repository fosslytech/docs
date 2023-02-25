import { Button, PasswordInput, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React, { useState } from 'react';
import { DecryptDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';
import useDocCtx from 'src/store/doc/use-doc-ctx';

interface Props {
  id: string;
  ext: string;
}

const DecryptModal: React.FC<Props> = ({ id, ext }) => {
  const docMutation = useCommonDocMutation<DecryptDocDTO>('/api/doc/decrypt', 'POST');
  const { handleOpenMyDocument } = useDocCtx();

  const form = useForm({
    initialValues: {
      password: '',
    },

    validate: {
      password: isNotEmpty('Enter password'),
    },
  });

  const handleDecryptDoc = async (values: typeof form.values) => {
    await handleOpenMyDocument(ext, id, values.password);

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleDecryptDoc)}>
      <Text size="sm">Enter document password to unlock it</Text>

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

      <Button fullWidth mt="lg" type="submit" loading={docMutation.isLoading}>
        Unlock
      </Button>
    </form>
  );
};

export default DecryptModal;
