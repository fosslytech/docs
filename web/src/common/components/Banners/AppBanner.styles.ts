import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  banner: {
    position: 'fixed',
    width: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    zIndex: 99,
  },
}));
