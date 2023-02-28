import { Button, Text, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import React from 'react';
import { DuplicateDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  id: string;
  name: string;
}

const DuplicateModal: React.FC<Props> = ({ id, name }) => {
  const { translate, content } = useGlobalCtx();
  const docMutation = useCommonDocMutation<DuplicateDocDTO>('/api/doc/duplicate', 'POST');

  const form = useForm({
    initialValues: {
      name: name + ' copy',
    },

    validate: {
      name: isNotEmpty(translate(content.pages.doc_my.fieldRequired)),
    },
  });

  const handleDuplicateDoc = async (values: typeof form.values) => {
    await docMutation.mutateAsync({ id, name: values.name });

    closeAllModals();
  };

  return (
    <form onSubmit={form.onSubmit(handleDuplicateDoc)}>
      <Text size="sm">{translate(content.pages.doc_my.modalDuplicateDescription)}</Text>

      <TextInput
        label={translate(content.pages.doc_my.modalNameInput)}
        placeholder={translate(content.pages.doc_my.modalNameInput)}
        mt="sm"
        {...form.getInputProps('name')}
      />

      <Button fullWidth mt="lg" type="submit" loading={docMutation.isLoading}>
        {translate(content.pages.doc_my.modalDuplicateBtn)}
      </Button>
    </form>
  );
};

export default DuplicateModal;
