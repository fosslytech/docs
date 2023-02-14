import React, { useState } from 'react';
import { Button, TextInput } from '@mantine/core';
import { useApiAuth } from 'src/api/auth/use-api-auth';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import { IconMail } from '@tabler/icons';

const OTPModal = () => {
  const { translate, content } = useGlobalCtx();
  const { auth_signInWithOtp, isLoading } = useApiAuth();

  const [mail, setMail] = useState<string>('');

  return (
    <>
      <TextInput
        label={translate(content.pages.auth_login.mailLabel)}
        placeholder={translate(content.pages.auth_login.mailPlaceholder)}
        data-autofocus
        required
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        icon={<IconMail size={22} />}
      />
      <Button fullWidth onClick={() => auth_signInWithOtp(mail)} mt="md" loading={isLoading}>
        {translate(content.pages.auth_login.buttonOtp)}
      </Button>
    </>
  );
};

export default OTPModal;
