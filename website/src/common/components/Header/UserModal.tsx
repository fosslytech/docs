import { Button, TextInput } from '@mantine/core';
import { closeAllModals } from '@mantine/modals';
import React, { useState } from 'react';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const UserModal = () => {
  const { logIn } = useGlobalCtx();
  const [val, setVal] = useState('');

  return (
    <>
      <TextInput
        label="Your username"
        placeholder="Enter any username"
        data-autofocus
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Button
        fullWidth
        onClick={() => {
          logIn({ username: val });
          closeAllModals();
        }}
        mt="md"
      >
        Submit
      </Button>
    </>
  );
};

export default UserModal;
