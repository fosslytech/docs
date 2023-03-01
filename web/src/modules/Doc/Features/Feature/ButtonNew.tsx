import { Button } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import React, { useState } from 'react';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconPlus } from '@tabler/icons-react';

const ButtonNew: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();
  const { handleNewDocument } = useDocCtx();

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await handleNewDocument(feature.appType);
    setLoading(false);
  };

  return (
    <Button
      variant="filled"
      ml={10}
      leftIcon={<IconPlus size={20} />}
      onClick={handleClick}
      color={feature.color}
      loading={loading}
    >
      {translate(feature.button2)}
    </Button>
  );
};

export default ButtonNew;
