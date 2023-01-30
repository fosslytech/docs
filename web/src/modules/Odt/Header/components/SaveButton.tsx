import { CloudFilled } from '@fluentui/react-icons';
import { Button, Group, Text } from '@mantine/core';
import React, { useState } from 'react';

const SaveButton = () => {
  const [upToDate, setUpToDate] = useState(false);

  return (
    <Group>
      <Button leftIcon={<CloudFilled fontSize={22} />} disabled={upToDate}>
        {upToDate ? 'Up to date!' : 'Save changes'}
      </Button>

      {!upToDate && <Text size={14}>You have unsaved changes</Text>}
    </Group>
  );
};

export default SaveButton;
