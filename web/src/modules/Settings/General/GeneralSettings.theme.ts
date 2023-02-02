import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
    },
  },
}));
