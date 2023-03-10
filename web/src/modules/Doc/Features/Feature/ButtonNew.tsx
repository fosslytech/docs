import { Button } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import React from 'react';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconPlus } from '@tabler/icons-react';

const ButtonNew: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();

  const { handleNewDocument, isLoadingNew } = useDocCtx();

  return (
    <Button
      variant="filled"
      ml={10}
      leftIcon={<IconPlus size={20} />}
      onClick={handleNewDocument}
      color={feature.color}
      loading={isLoadingNew}
    >
      {translate(feature.button2)}
    </Button>
  );
};

export default ButtonNew;
