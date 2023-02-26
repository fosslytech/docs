import { Button, PasswordInput, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React from 'react';
import { UpdateDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  id: string;
}

const PasswordAddModal: React.FC<Props> = ({ id }) => {
  const { translate, content } = useGlobalCtx();

  const docMutation = useCommonDocMutation<UpdateDocDTO>('/api/doc/password', 'POST');

  const form = useForm({
    initialValues: {
      password2: '',
    },

    validate: {
      password2: isNotEmpty(translate(content.pages.doc_my.fieldRequired)),
    },
  });

  const handleDeleteDoc = async (values: typeof form.values) => {
    await docMutation.mutateAsync({ id, password2: values.password2 });

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleDeleteDoc)}>
      <Text size="sm">{translate(content.pages.doc_my.modalPasswordAddDescription)}</Text>

      <PasswordInput
        label={translate(content.pages.doc_my.modalPasswordAddInput)}
        placeholder="*******"
        mt="sm"
        visibilityToggleIcon={({ reveal }) => (reveal ? <IconEye size={20} /> : <IconEyeOff size={20} />)}
        styles={{
          visibilityToggle: {
            marginRight: 12,
          },
        }}
        {...form.getInputProps('password2')}
      />

      <Button fullWidth mt="lg" type="submit" loading={docMutation.isLoading}>
        {translate(content.pages.doc_my.modalPasswordAddBtn)}
      </Button>
    </form>
  );
};

export default PasswordAddModal;
