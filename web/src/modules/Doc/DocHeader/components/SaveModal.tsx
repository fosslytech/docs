import { Button, PasswordInput, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Editor } from '@tiptap/react';
import React from 'react';
import { useSbDocuments } from 'src/api/doc/use-sb-documents';

interface Props {
  editor: Editor;
}

const SaveModal: React.FC<Props> = ({ editor }) => {
  const { sb_DocumentInsert, isLoading } = useSbDocuments();

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
    await sb_DocumentInsert({
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
        label="Password"
        placeholder="Password"
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
