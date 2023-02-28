import { Button, Text } from '@mantine/core';
import { closeAllModals } from '@mantine/modals';
import React, { Dispatch } from 'react';
import { DeleteDocDTO, useCommonDocMutation } from 'src/api/doc/use-my-docs-mutation';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  id: string;
  setPage: Dispatch<number>;
}

const DeleteModal: React.FC<Props> = ({ id, setPage }) => {
  const { translate, content } = useGlobalCtx();
  const docMutation = useCommonDocMutation<DeleteDocDTO>('/api/doc', 'DELETE');

  const handleDeleteDoc = async () => {
    await docMutation.mutateAsync({ id });

    setPage(1);
    closeAllModals();
  };

  return (
    <>
      <Text size="sm">{translate(content.pages.doc_my.modalDeleteDescription)}</Text>

      <Button fullWidth mt="lg" onClick={handleDeleteDoc} loading={docMutation.isLoading} color="red">
        {translate(content.pages.doc_my.modalDeleteBtn)}
      </Button>
    </>
  );
};

export default DeleteModal;
