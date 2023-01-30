import { AddFilled } from '@fluentui/react-icons';
import { Button } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import React from 'react';
import useDocContentCtx from 'src/store/doc-content/use-doc-content-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const ButtonNew: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();

  const { handleNewDocument, isLoadingNew } = useDocContentCtx();

  return (
    <Button
      variant="filled"
      ml={10}
      leftIcon={<AddFilled fontSize={16} />}
      onClick={handleNewDocument}
      color={feature.color}
      loading={isLoadingNew}
    >
      {translate(feature.button2)}
    </Button>
  );
};

export default ButtonNew;
