import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    minWidth: 350,
    maxWidth: 350,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },
}));
