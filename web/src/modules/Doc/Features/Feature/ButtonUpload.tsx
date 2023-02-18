import { Button, FileButton } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import React from 'react';
import useDocContentCtx from 'src/store/doc-content/use-doc-content-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconUpload } from '@tabler/icons-react';

const ButtonUpload: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();
  const { handleUploadDocument, isLoadingUpload } = useDocContentCtx();

  return (
    <FileButton onChange={handleUploadDocument} accept={feature.accept}>
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
