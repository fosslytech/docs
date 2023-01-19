import React from 'react';
import { Global } from '@mantine/core';

export function Fonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Inter',

            src: `
            url('url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap') font-weight-300,
            url('url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap') font-weight-400,
            url('url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap') font-weight-500,
            url('url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap') font-weight-600,
            url('url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap') font-weight-700,
            `,
          },
        },
      ]}
    />
  );
}
