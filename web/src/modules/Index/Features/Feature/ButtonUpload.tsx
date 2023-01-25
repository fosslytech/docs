import { ArrowUploadFilled } from '@fluentui/react-icons';
import { Button, FileButton } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import { useRouter } from 'next/router';
import React from 'react';
import useConvertApi from 'src/api/doc/use-convert';
import useDocContentCtx from 'src/store/doc-content/use-doc-content-ctx';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const ButtonUpload: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();
  const { setInitialContent } = useDocContentCtx();
  const router = useRouter();

  const { isLoading, odt2Html } = useConvertApi();

  const handleUploadDoc = async (file: File) => {
    const data = await odt2Html(file);

    setInitialContent(data.output);

    router.push(`/doc/odt/${data.roomName}`);
  };
  return (
    <FileButton onChange={handleUploadDoc} accept={feature.accept}>
      {(props) => (
        <Button
          variant="default"
          leftIcon={<ArrowUploadFilled fontSize={16} />}
          onClick={() => {}}
          loading={isLoading}
          {...props}
        >
          {translate(feature.button1)}
        </Button>
      )}
    </FileButton>
  );
};

export default ButtonUpload;
