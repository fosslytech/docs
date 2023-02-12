import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  form: {
    width: '100%',
  },

  group: {
    alignItems: 'flex-end',
  },

  input: {
    flex: 1,
  },

  range: {
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  resetIcon: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },
}));