import { Button, PasswordInput, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { UpdateDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  id: string;
}

const PasswordDeleteModal: React.FC<Props> = ({ id }) => {
  const { translate, content } = useGlobalCtx();

  const docMutation = useCommonDocMutation<UpdateDocDTO>('/api/doc/password', 'DELETE');

  const form = useForm({
    initialValues: {
      password1: '',
    },

    validate: {
      password1: isNotEmpty(translate(content.pages.doc_my.fieldRequired)),
    },
  });

  const handleDeletePassword = async (values: typeof form.values) => {
    await docMutation.mutateAsync({ id, password1: values.password1 });

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleDeletePassword)}>
      <Text size="sm">{translate(content.pages.doc_my.modalPasswordDeleteDescription)}</Text>

      <PasswordInput
        label={translate(content.pages.doc_my.modalPasswordDeleteInput)}
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

      <Button fullWidth mt="lg" type="submit" loading={docMutation.isLoading} color="orange">
        {translate(content.pages.doc_my.modalPasswordDeleteBtn)}
      </Button>
    </form>
  );
};

export default PasswordDeleteModal;
