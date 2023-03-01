import { Button, FileButton } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import React, { useState } from 'react';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconUpload } from '@tabler/icons-react';

const ButtonUpload: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();
  const { handleUploadDocument } = useDocCtx();

  const [loading, setLoading] = useState(false);

  const handleChange = async (file: File) => {
    setLoading(true);
    await handleUploadDocument(file, feature.appType);
    setLoading(false);
  };

  return (
    <FileButton onChange={handleChange} accept={feature.accept}>
      {(props) => (
        <Button
          variant="default"
          leftIcon={<IconUpload size={16} />}
          onClick={() => {}}
          loading={loading}
          {...props}
        >
          {translate(feature.button1)}
        </Button>
      )}
    </FileButton>
  );
};

export default ButtonUpload;
