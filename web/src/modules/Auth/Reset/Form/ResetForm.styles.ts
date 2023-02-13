import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  form: {
    width: 460,
  },

  link: {
    fontSize: 12,
  },

  group: {
    alignItems: 'flex-end',
  },

  input: {
    flex: 1,
  },

  resetIcon: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },
}));
