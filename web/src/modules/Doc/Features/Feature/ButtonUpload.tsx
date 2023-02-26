import { Button, FileButton } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import React from 'react';
import useDocCtx from 'src/store/doc/use-doc-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconUpload } from '@tabler/icons-react';

const ButtonUpload: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();
  const { handleUploadDocument, isLoadingUpload } = useDocCtx();

  const handleChange = (file: File) => {
    console.log(file);
    handleUploadDocument(file, feature.appType);
  };

  return (
    <FileButton onChange={handleChange} accept={feature.accept}>
      {(props) => (
        <Button
          variant="default"
          leftIcon={<IconUpload size={16} />}
          onClick={() => {}}
          loading={isLoadingUpload}
          {...props}
        >
          {translate(feature.button1)}
        </Button>
      )}
    </FileButton>
  );
};

export default ButtonUpload;
