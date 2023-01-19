import React from 'react';
import { Title, Text, Button, Container, Group } from '@mantine/core';
import useStyles from './Error.styles';

import content from '@content/error/error.json';
import useGlobalState from 'src/store/global/use-global-state';
import Link from 'next/link';

interface Props {
  code: 404 | 401 | 500;
}

const ErrorPage: React.FC<Props> = ({ code }) => {
  const { translate } = useGlobalState();
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>{code}</div>

      <Title className={classes.title}>{translate(content.title)}</Title>

      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        {translate(content[code])}
      </Text>

      <Group position="center">
        <Link href="/">
          <Button variant="subtle" size="md">
            {translate(content.button)}
          </Button>
        </Link>
      </Group>
    </Container>
  );
};

export default ErrorPage;
