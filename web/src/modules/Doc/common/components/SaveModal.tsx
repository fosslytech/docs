import { Button, PasswordInput, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Editor } from '@tiptap/react';
import React, { useState } from 'react';
import useDocCtx from 'src/store/doc/use-doc-ctx';

interface Props {
  editor: Editor;
}

const SaveModal: React.FC<Props> = ({ editor }) => {
  const { handleSaveMyDocument } = useDocCtx();
  const [isLoading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      password: '',
    },

    validate: {
      name: isNotEmpty('Enter document name'),
    },
  });

  const handleSaveDoc = async (values: typeof form.values) => {
    setLoading(true);
    await handleSaveMyDocument(editor, values.name, values.password);
    setLoading(false);
  };

  return (
    <form onSubmit={form.onSubmit(handleSaveDoc)}>
      <TextInput
        label="Document name"
        placeholder="Document name"
        // data-autofocus
        {...form.getInputProps('name')}
      />
      <PasswordInput
        label="Document password"
        placeholder="*******"
        description="Optional, you'll need to input it before accessing your document"
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
        Save
      </Button>
    </form>
  );
};

export default SaveModal;
