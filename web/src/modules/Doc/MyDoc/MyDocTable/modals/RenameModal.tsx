import { Button, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { useCommonDocMutation, UpdateDocDTO } from 'src/api/doc/use-my-docs-mutation';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  id: string;
  name: string;
}

const RenameModal: React.FC<Props> = ({ id, name }) => {
  const { translate, content } = useGlobalCtx();
  const docMutation = useCommonDocMutation<UpdateDocDTO>('/api/doc/name', 'PATCH');

  const form = useForm({
    initialValues: {
      name,
    },

    validate: {
      name: isNotEmpty(translate(content.pages.doc_my.fieldRequired)),
    },
  });

  const handleDeleteDoc = async (values: typeof form.values) => {
    await docMutation.mutateAsync({ id, name: values.name });

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleDeleteDoc)}>
      <TextInput
        label={translate(content.pages.doc_my.modalNameInput)}
        placeholder={translate(content.pages.doc_my.modalNameInput)}
        mt="sm"
        {...form.getInputProps('name')}
      />

      <Button fullWidth mt="lg" type="submit" loading={docMutation.isLoading}>
        {translate(content.pages.doc_my.modalNameBtn)}
      </Button>
    </form>
  );
};

export default RenameModal;
