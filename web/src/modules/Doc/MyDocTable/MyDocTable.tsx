import { Table, Loader, Center, Button, Group, Text, Divider, ScrollArea } from '@mantine/core';
import { IconPlus, IconRefresh } from '@tabler/icons-react';
import { IDocument } from '@ts/supabase.types';
import Link from 'next/link';
import { useSwrDocuments } from 'src/api/doc/use-sb-documents';
import MyDocRow from './MyDocRow';
import useStyles from './Table.styles';

const MyDocTable = () => {
  const { data: documents, isLoading, isValidating, mutate } = useSwrDocuments();
  const { classes } = useStyles();

  return (
    <ScrollArea mt={50} sx={{ overflow: 'unset' }}>
      <Group p="xs" bg="dark.7">
        <Button
          variant="light"
          size="xs"
          onClick={() => mutate()}
          leftIcon={<IconRefresh size={16} />}
          loading={isValidating}
        >
          Refresh
        </Button>

        <Link href="/doc">
          <Button size="xs" leftIcon={<IconPlus size={16} />}>
            Create new
          </Button>
        </Link>
      </Group>

      <Divider />

      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Document</th>
            <th>Password</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Options</th>
          </tr>
        </thead>

        {!isLoading && documents && (
          <tbody>
            {documents.map((item: IDocument) => (
              <MyDocRow key={item.id} mutate={mutate} {...item} />
            ))}
          </tbody>
        )}
      </Table>

      {!isLoading && !documents?.length && (
        <Center my="lg">
          <Text size="md">You have no documents</Text>
        </Center>
      )}

      {isLoading && (
        <Center my="lg">
          <Loader size="lg" />
        </Center>
      )}
    </ScrollArea>
  );
};

export default MyDocTable;
