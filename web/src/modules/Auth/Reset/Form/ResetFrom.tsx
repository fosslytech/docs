import React, { useRef } from 'react';
import {
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  ThemeIcon,
  Tooltip,
} from '@mantine/core';

import useStyles from './ResetForm.styles';
import { useForm, matches } from '@mantine/form';
import { initialValues } from './types';
import { REGEX_PASSWORD } from '@utils/constants/auth';
import PasswordStrength from '@module/Auth/PasswordStrength/PasswordStrength';
import { generateRandomPassword } from '@utils/functions/randomPassword';
import { useApiAuth } from 'src/api/auth/use-api-auth';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconLock, IconEye, IconEyeOff, IconRefresh } from '@tabler/icons';

const ResetForm = () => {
  const { translate, content } = useGlobalCtx();
  const { classes } = useStyles();
  const { auth_resetPassword, isLoading } = useApiAuth();

  const form = useForm({
    initialValues,
    validate: {
      password1: matches(REGEX_PASSWORD, translate(content.pages.auth_reset.errors.password1)),
      password2: (value, { password1 }) =>
        (REGEX_PASSWORD.test(value) ? true : translate(content.pages.auth_reset.errors.password1)) &&
        (value === password1 ? true : translate(content.pages.auth_reset.errors.password2)),
    },
  });

  const handleUseGenerated = () => {
    const randomPassword = generateRandomPassword(14);

    form.setFieldValue('password1', randomPassword);
    form.setFieldValue('password2', randomPassword);
  };

  const handleSubmit = (values: typeof form.values) => {
    auth_resetPassword(values.password1);
  };

  return (
    <Container className={classes.form} size={460} my={40} px={0}>
      <Title align="center" sx={() => ({ fontWeight: 900 })}>
        {translate(content.pages.auth_reset.title)}
      </Title>

      <Text color="dimmed" size="sm" align="center" mt={5}>
        {translate(content.pages.auth_reset.subtitle)}
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Group className={classes.group}>
            <PasswordStrength value={form.values.password1}>
              <PasswordInput
                label={translate(content.pages.auth_reset.password1Label)}
                placeholder={translate(content.pages.auth_reset.password1Placeholder)}
                required
                {...form.getInputProps('password1')}
                mt="xs"
                visibilityToggleIcon={({ reveal }) =>
                  reveal ? <IconEye size={18} /> : <IconEyeOff size={18} />
                }
                styles={{
                  visibilityToggle: {
                    marginRight: 12,
                  },
                }}
                icon={<IconLock size={22} />}
                className={classes.input}
                size="md"
              />
            </PasswordStrength>

            <Tooltip label={translate(content.pages.auth_reset.generateTooltip)} withArrow arrowSize={3}>
              <ThemeIcon className={classes.resetIcon} onClick={handleUseGenerated} size={42} color="gray">
                <IconRefresh size={24} />
              </ThemeIcon>
            </Tooltip>
          </Group>

          <PasswordInput
            label={translate(content.pages.auth_reset.password2Label)}
            placeholder={translate(content.pages.auth_reset.password2Placeholder)}
            required
            {...form.getInputProps('password2')}
            mt="md"
            visibilityToggleIcon={({ reveal }) => (reveal ? <IconEye size={18} /> : <IconEyeOff size={18} />)}
            styles={{
              visibilityToggle: {
                marginRight: 12,
              },
            }}
            icon={<IconLock size={22} />}
            size="md"
          />

          <Button fullWidth mt="xl" type="submit" loading={isLoading} size="md">
            {translate(content.pages.auth_reset.button)}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ResetForm;
