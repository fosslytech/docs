import { Button, PasswordInput, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React, { useState } from 'react';
import useDocContentCtx from 'src/store/doc-content/use-doc-content-ctx';

interface Props {
  id: string;
  ext: string;
}

const DecryptModal: React.FC<Props> = ({ id, ext }) => {
  const [loading, setLoading] = useState(false);
  const { handleOpenMyDocument } = useDocContentCtx();

  const form = useForm({
    initialValues: {
      password: '',
    },

    validate: {
      password: isNotEmpty('Enter password'),
    },
  });

  const handleDeleteDoc = async (values: typeof form.values) => {
    setLoading(true);
    await handleOpenMyDocument(ext, id, values.password);
    setLoading(false);

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleDeleteDoc)}>
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

      <Button fullWidth mt="lg" type="submit" loading={loading}>
        Unlock
      </Button>
    </form>
  );
};

export default DecryptModal;
