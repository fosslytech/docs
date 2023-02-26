import { Table, Loader, Center, Button, Group, Text, Divider, ScrollArea } from '@mantine/core';
import { IconPlus, IconRefresh } from '@tabler/icons-react';
import { IDocument } from '@ts/supabase.types';
import Link from 'next/link';
import { useQueryClient } from 'react-query';
import { useMyDocsQuery } from 'src/api/doc/use-my-docs-query';
import { QUERY_KEYS } from 'src/api/queryKeys';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import MyDocRow from './MyDocRow';

const MyDocTable = () => {
  const { translate, content } = useGlobalCtx();
  const { data: documents, isLoading } = useMyDocsQuery();
  const queryClient = useQueryClient();

  return (
    <ScrollArea mt={50} sx={{ overflow: 'unset' }}>
      <Group p="xs" bg="dark.7">
        <Button
          variant="light"
          size="xs"
          onClick={() => queryClient.invalidateQueries(QUERY_KEYS.MY_DOCS)}
          leftIcon={<IconRefresh size={16} />}
          loading={!!queryClient.isFetching({ queryKey: QUERY_KEYS.MY_DOCS })}
        >
          {translate(content.pages.doc_my.refreshBtn)}
        </Button>

        <Link href="/doc">
          <Button size="xs" leftIcon={<IconPlus size={16} />}>
            {translate(content.pages.doc_my.createNewBtn)}
          </Button>
        </Link>
      </Group>

      <Divider />

      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>{translate(content.pages.doc_my.label1)}</th>
            <th>{translate(content.pages.doc_my.label2)}</th>
            <th>{translate(content.pages.doc_my.label3)}</th>
            <th>{translate(content.pages.doc_my.label4)}</th>
            <th>{translate(content.pages.doc_my.label5)}</th>
          </tr>
        </thead>

        {!isLoading && documents && (
          <tbody>
            {documents.map((item: IDocument) => (
              <MyDocRow key={item.id} {...item} />
            ))}
          </tbody>
        )}
      </Table>

      {!isLoading && !documents?.length && (
        <Center my="lg">
          <Text size="md">{translate(content.pages.doc_my.noDucuments)}</Text>
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
