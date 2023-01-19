import React from 'react';
import { Global } from '@mantine/core';

export function BaseStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
          padding: 0,
          margin: 0,
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
        },

        a: {
          color: theme.colors.blue[6],
          textDecoration: 'none',
        },
      })}
    />
  );
}
