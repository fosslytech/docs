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

const PasswordChangeModal: React.FC<Props> = ({ id }) => {
  const { translate, content } = useGlobalCtx();

  const docMutation = useCommonDocMutation<UpdateDocDTO>('/api/doc/password', 'PATCH');

  const form = useForm({
    initialValues: {
      password1: '',
      password2: '',
    },
    validate: {
      password1: isNotEmpty(translate(content.pages.doc_my.fieldRequired)),
      password2: isNotEmpty(translate(content.pages.doc_my.fieldRequired)),
    },
  });

  const handleChangePass = async (values: typeof form.values) => {
    await docMutation.mutateAsync({ id, password1: values.password1, password2: values.password2 });

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleChangePass)}>
      <Text size="sm">{translate(content.pages.doc_my.modalPasswordChangeDescription)}</Text>

      <PasswordInput
        label={translate(content.pages.doc_my.modalPasswordChangeInput1)}
        placeholder="*******"
        mt="sm"
        visibilityToggleIcon={({ reveal }) => (reveal ? <IconEye size={20} /> : <IconEyeOff size={20} />)}
        styles={{
          visibilityToggle: {
            marginRight: 12,
          },
        }}
        {...form.getInputProps('password1')}
      />

      <PasswordInput
        label={translate(content.pages.doc_my.modalPasswordChangeInput2)}
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
        {translate(content.pages.doc_my.modalPasswordChangeBtn)}
      </Button>
    </form>
  );
};

export default PasswordChangeModal;
