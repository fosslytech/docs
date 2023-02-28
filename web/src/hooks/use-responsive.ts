import { MantineSize, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// Usage example:
// const isXs = useResponsive("max", "xs");

export const useResponsive = (target: 'min' | 'max', bp: MantineSize) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(${target}-width: ${theme.breakpoints[bp]}px)`);

  return matches;
};
