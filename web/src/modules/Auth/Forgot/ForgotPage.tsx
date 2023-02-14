import React from 'react';
import { Paper, Title, Text, TextInput, Button, Container, Group, Center } from '@mantine/core';

import useStyles from './ForgotPage.styles';
import Link from 'next/link';
import { useForm, isEmail } from '@mantine/form';
import { useApiAuth } from 'src/api/auth/use-api-auth';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconMail, IconArrowLeft } from '@tabler/icons';

const ForgotPassword = () => {
  const { translate, content } = useGlobalCtx();
  const { classes, theme } = useStyles();
  const { auth_forgotPassword } = useApiAuth();

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: isEmail(translate(content.pages.auth_forgot.errors.email)),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    auth_forgotPassword(values.email);
  };

  return (
    <Center style={{ height: '100%' }}>
      <Container className={classes.form} size={460} my={30} px={0}>
        <Title align="center" sx={() => ({ fontWeight: 900 })}>
          {translate(content.pages.auth_forgot.title)}
        </Title>

        <Text color="dimmed" size="sm" align="center" mt={5}>
          {translate(content.pages.auth_forgot.subtitle)}
        </Text>

        <Paper className={classes.form} withBorder shadow="md" p={30} radius="md" mt="xl">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              icon={<IconMail size={22} />}
              label={translate(content.pages.auth_forgot.mailLabel)}
              placeholder={translate(content.pages.auth_forgot.mailPlaceholder)}
              required
              {...form.getInputProps('email')}
              size="md"
            />

            <Group position="apart" mt="xl" className={classes.controls}>
              <Link href="/auth/login" className={classes.control}>
                <Center inline style={{ cursor: 'pointer', color: theme.colors.blue[6] }}>
                  <IconArrowLeft size={18} />

                  <Text size="sm" ml={4}>
                    {translate(content.pages.auth_forgot.toLogin)}
                  </Text>
                </Center>
              </Link>

              <Button className={classes.control} type="submit" size="md">
                {translate(content.pages.auth_forgot.button)}
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </Center>
  );
};

export default ForgotPassword;
