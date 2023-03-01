import { Button, PasswordInput, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import useDetectAppType from '@module/Doc/use-detect-app-type';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Editor } from '@tiptap/react';
import React from 'react';
import { InsertDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';
import useDocCtx from 'src/store/doc/use-doc-ctx';

interface Props {
  editor: Editor;
}

const SaveModal: React.FC<Props> = ({ editor }) => {
  const { setInitialPassword, setInitialId } = useDocCtx();

  const docMutation = useCommonDocMutation<InsertDocDTO>('/api/doc', 'POST');

  const appType = useDetectAppType();

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
    const res = await docMutation.mutateAsync({
      ext: appType || 'odt',
      html: editor.getHTML(),
      name: values.name,
      password: values.password,
    });

    if (values.password) setInitialPassword(values.password);
    if (res?.data) setInitialId(res.data);

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
