import { Button, PasswordInput, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Editor } from '@tiptap/react';
import React from 'react';
import { InsertDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';

interface Props {
  editor: Editor;
}

const SaveModal: React.FC<Props> = ({ editor }) => {
  const docMutation = useCommonDocMutation<InsertDocDTO>('/api/doc', 'POST');

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
    await docMutation.mutateAsync({
      ext: 'odt',
      html: editor.getHTML(),
      name: values.name,
      password: values.password,
    });

    closeAllModals();
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
      <Button fullWidth mt="lg" type="submit" loading={docMutation.isLoading}>
        Save
      </Button>
    </form>
  );
};

export default SaveModal;
