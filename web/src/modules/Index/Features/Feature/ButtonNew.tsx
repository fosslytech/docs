import { AddFilled } from '@fluentui/react-icons';
import { Button } from '@mantine/core';
import { IFeature } from '@utils/resources/featuresData';
import { useRouter } from 'next/router';
import React from 'react';
import useConvertApi from 'src/api/doc/use-convert';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const ButtonNew: React.FC<IFeature> = (feature) => {
  const { translate } = useGlobalCtx();
  const router = useRouter();

  const { isLoading, newDoc } = useConvertApi();

  const handleNewDoc = async () => {
    const data = await newDoc();

    router.push(`/doc/odt/${data.roomName}`);
  };

  return (
    <Button
      variant="filled"
      ml={10}
      leftIcon={<AddFilled fontSize={16} />}
      onClick={() => handleNewDoc()}
      color={feature.color}
      loading={isLoading}
    >
      {translate(feature.button2)}
    </Button>
  );
};

export default ButtonNew;
