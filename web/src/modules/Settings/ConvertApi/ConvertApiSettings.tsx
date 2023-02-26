import { Flex, Group, Paper, Text } from '@mantine/core';

import useGlobalCtx from 'src/store/global/use-global-ctx';

// import useStyles from './ConvertApiSettings.styles';

import { IconServer } from '@tabler/icons-react';
import KeysTable from './KeysTable/KeysTable';
import { useSession } from '@supabase/auth-helpers-react';

const ConvertApiSettings = () => {
  const session = useSession();

  const { translate, content } = useGlobalCtx();
  // const { classes } = useStyles();

  return (
    <Paper radius="md" p="xl" mt={40} withBorder>
      <Flex align="center" mb={16}>
        <IconServer size={32} />

        <Text size={28} weight={600} ml="sm">
          {translate(content.pages.settings.convertApi.title)}
        </Text>
      </Flex>

      <Text>{translate(content.pages.settings.convertApi.description)}</Text>

      {session ? <KeysTable /> : <Text mt="xl">{translate(content.pages.settings.convertApi.noAuth)}</Text>}
    </Paper>
  );
};

export default ConvertApiSettings;
