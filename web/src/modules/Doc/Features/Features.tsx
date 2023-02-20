import { Flex } from '@mantine/core';
import Feature from './Feature/Feature';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import { getFeaturesData } from '@utils/resources/featuresData';

const Features = () => {
  const { content } = useGlobalCtx();

  const features = getFeaturesData(content).map((feature, i) => <Feature key={i} {...feature} />);

  return (
    <Flex mt={50} gap="md" justify="center" align="center" direction="row" wrap="wrap">
      {features}
    </Flex>
  );
};

export default Features;
