import React from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
} from '@mantine/core';
import { EyeOffRegular, EyeRegular, KeyRegular, LinkRegular, MailRegular } from '@fluentui/react-icons';

import Link from 'next/link';
import { useForm, isEmail, matches } from '@mantine/form';

import { initialValues, LoginFormProps } from './types';
import useStyles from './LoginForm.styles';
import AuthButton from '../AuthButton/AuthButton';
import GitHub from 'src/icons/logos/GitHub';
import OTPModal from '../../OTP/OTPModal';
import { useApiAuth } from 'src/api/auth/use-api-auth';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { openModal } from '@mantine/modals';
import { REGEX_PASSWORD } from '@utils/constants/auth';

const LoginForm: React.FC<LoginFormProps> = ({ withTitle = true }) => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();
  const { auth_signInWithPassword, auth_signInWithGitHub, isLoading } = useApiAuth();

  const form = useForm({
    initialValues,
    validate: {
      email: isEmail(translate(content.pages.auth_login.errors.email)),
      password: matches(REGEX_PASSWORD, translate(content.pages.auth_login.errors.password)),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    auth_signInWithPassword(values);
  };

  return (
    <Container className={classes.form} size={460} my={40} px={0}>
      {withTitle && (
        <>
          <Title align="center" sx={() => ({ fontWeight: 900 })}>
            {translate(content.pages.auth_login.title)}
          </Title>

          <Text color="dimmed" size="sm" align="center" mt={5}>
            {translate(content.pages.auth_login.noAccount)}{' '}
            <Link href="/auth/register">{translate(content.pages.auth_login.registerCta)}</Link>
          </Text>
        </>
      )}

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label={translate(content.pages.auth_login.mailLabel)}
            placeholder={translate(content.pages.auth_login.mailPlaceholder)}
            required
            {...form.getInputProps('email')}
            icon={<MailRegular fontSize={20} />}
          />

          <PasswordInput
            label={translate(content.pages.auth_login.passwordLabel)}
            placeholder={translate(content.pages.auth_login.passwordPlaceholder)}
            required
            {...form.getInputProps('password')}
            mt="xs"
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <EyeRegular fontSize={20} /> : <EyeOffRegular fontSize={20} />
            }
            icon={<KeyRegular fontSize={20} />}
          />

          <Group position="apart" mt="xs">
            <Checkbox
              label={translate(content.pages.auth_login.rememberLabel)}
              {...form.getInputProps('remember', { type: 'checkbox' })}
            />

            <Text size="sm">
              <Link href="/auth/forgot">{translate(content.pages.auth_login.forgot)}</Link>
            </Text>
          </Group>

          <Button fullWidth mt="md" type="submit" loading={isLoading}>
            {translate(content.pages.auth_login.button)}
          </Button>
        </form>

        <Divider label="Or continue with:" labelPosition="center" my="lg" />

        <Group grow mb="md" mt="md">
          <AuthButton leftIcon={<GitHub width={20} />} radius="xl" onClick={auth_signInWithGitHub}>
            GitHub
          </AuthButton>
          <AuthButton
            leftIcon={<LinkRegular fontSize={20} />}
            radius="xl"
            onClick={() => openModal({ title: 'Sign in with OTP', children: <OTPModal />, centered: true })}
          >
            Magic link
          </AuthButton>
        </Group>
      </Paper>
    </Container>
  );
};

export default LoginForm;