import React from 'react';
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Tooltip,
  ThemeIcon,
} from '@mantine/core';
import {
  ArrowSyncRegular,
  EyeOffRegular,
  EyeRegular,
  KeyRegular,
  LinkRegular,
  MailRegular,
} from '@fluentui/react-icons';

import Link from 'next/link';
import { useForm, isEmail, matches } from '@mantine/form';
import { REGEX_PASSWORD } from '@utils/constants/auth';

import { initialValues, RegisterFormProps } from './types';
import useStyles from './RegisterForm.styles';
import GitHub from 'src/icons/logos/GitHub';
import AuthButton from '@module/Auth/Login/AuthButton/AuthButton';
import OTPModal from '@module/Auth/OTP/OTPModal';
import { generateRandomPassword } from '@utils/functions/randomPassword';
import PasswordStrength from '../../PasswordStrength/PasswordStrength';
import { useApiAuth } from 'src/api/auth/use-api-auth';
import { openModal } from '@mantine/modals';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const RegisterForm: React.FC<RegisterFormProps> = ({ withTitle = true }) => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();
  const { auth_signUp, auth_signInWithGitHub, isLoading } = useApiAuth();

  const form = useForm({
    initialValues,
    validate: {
      email: isEmail(translate(content.pages.auth_register.errors.email)),
      password: matches(REGEX_PASSWORD, translate(content.pages.auth_register.errors.password)),
    },
  });

  const handleUseGenerated = () => {
    form.setFieldValue('password', generateRandomPassword(14));
  };

  const handleSubmit = (values: typeof form.values) => {
    auth_signUp(values);
  };

  return (
    <Container className={classes.form} size={460} my={40} px={0}>
      {withTitle && (
        <>
          <Title align="center" sx={() => ({ fontWeight: 900 })}>
            {translate(content.pages.auth_register.title)}
          </Title>

          <Text color="dimmed" size="sm" align="center" mt={5}>
            {translate(content.pages.auth_register.yesAccount)}{' '}
            <Link href="/auth/login">{translate(content.pages.auth_register.loginCta)}</Link>
          </Text>
        </>
      )}

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label={translate(content.pages.auth_register.mailLabel)}
            placeholder={translate(content.pages.auth_register.mailPlaceholder)}
            required
            {...form.getInputProps('email')}
            icon={<MailRegular fontSize={20} />}
            mb="xs"
          />

          <Group className={classes.group}>
            <PasswordStrength value={form.values.password}>
              <PasswordInput
                label={translate(content.pages.auth_register.passwordLabel)}
                placeholder={translate(content.pages.auth_register.passwordPlaceholder)}
                required
                {...form.getInputProps('password')}
                visibilityToggleIcon={({ reveal }) =>
                  reveal ? <EyeRegular fontSize={20} /> : <EyeOffRegular fontSize={20} />
                }
                icon={<KeyRegular fontSize={20} />}
                className={classes.input}
              />
            </PasswordStrength>

            <Tooltip label={translate(content.pages.auth_register.generateTooltip)} withArrow arrowSize={3}>
              <ThemeIcon className={classes.resetIcon} onClick={handleUseGenerated} size={36} color="gray">
                <ArrowSyncRegular fontSize={20} />
              </ThemeIcon>
            </Tooltip>
          </Group>

          <Button fullWidth mt="md" type="submit" loading={isLoading}>
            {translate(content.pages.auth_register.button)}
          </Button>
        </form>

        <Divider label="Or continue with:" labelPosition="center" my="lg" />

        <Group grow mb="md" mt="md">
          <AuthButton
            leftIcon={<LinkRegular fontSize={20} />}
            radius="xl"
            onClick={() => openModal({ title: 'Sign in with OTP', children: <OTPModal />, centered: true })}
          >
            Magic link
          </AuthButton>
          <AuthButton leftIcon={<GitHub width={20} />} radius="xl" onClick={auth_signInWithGitHub}>
            GitHub
          </AuthButton>
        </Group>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
