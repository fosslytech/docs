import { Anchor, Text, useMantineTheme } from '@mantine/core';
import { IconBrandFirefox } from '@tabler/icons-react';

const FirefoxBanner = () => {
  const theme = useMantineTheme();

  return (
    <>
      <IconBrandFirefox size={36} color={theme.colors.orange[5]} stroke={1.5} />

      <Text>
        Fossly recommends using Mozilla Firefox!{' '}
        <Anchor href="https://www.youtube.com/watch?v=eA8O97U1Pbc" target="_blank" rel="noopener noreferrer">
          Learn more
        </Anchor>
      </Text>
    </>
  );
};

export default FirefoxBanner;
