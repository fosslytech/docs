import { Table, Loader, Center, Text, ScrollArea } from '@mantine/core';
import { IDocument } from '@ts/supabase.types';
import { useState } from 'react';
import { useMyDocsQuery } from 'src/api/doc/use-my-docs-query';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import MyDocRow from './MyDocRow';
import TableTop from './TableTop';

const MyDocTable = () => {
  const { translate, content } = useGlobalCtx();
  const { data: documents, isLoading } = useMyDocsQuery();

  // Pagination
  const [page, setPage] = useState<number>(1);

  const perPage = 5;
  const total = Math.ceil(documents?.length / perPage);

  console.log(total);

  return (
    <>
      <ScrollArea sx={{ overflow: 'unset' }} offsetScrollbars>
        <TableTop documents={documents} total={total} page={page} setPage={setPage} />

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
              {documents.slice((page - 1) * perPage, (page - 1) * perPage + 5).map((item: IDocument) => (
                <MyDocRow key={item.id} setPage={setPage} {...item} />
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
    </>
  );
};

export default MyDocTable;
