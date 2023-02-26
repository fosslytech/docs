import { Button, Text } from '@mantine/core';
import { closeAllModals } from '@mantine/modals';
import React from 'react';
import { DeleteKeyDTO, useCommonKeyMutation } from 'src/api/key/use-api-keys-mutation';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  id: string;
}

const DelKeyModal: React.FC<Props> = ({ id }) => {
  const { translate, content } = useGlobalCtx();

  const keyMutation = useCommonKeyMutation<DeleteKeyDTO>('/api/key', 'DELETE');

  const handleDeleteDoc = async () => {
    await keyMutation.mutateAsync({ id });

    closeAllModals();
  };

  return (
    <>
      <Text size="sm">{translate(content.pages.settings.convertApi.modalDelDescription)}</Text>

      <Button fullWidth mt="lg" onClick={handleDeleteDoc} loading={keyMutation.isLoading} color="red">
        {translate(content.pages.settings.convertApi.modalDelBtn)}
      </Button>
    </>
  );
};

export default DelKeyModal;
