import { Table, ScrollArea, Loader, Center } from '@mantine/core';
import { IDocument } from '@ts/supabase.types';
import { useEffect, useState } from 'react';
import { useSbDocuments } from 'src/api/doc/use-sb-documents';
import MyDocRow from './MyDocRow';

const MyDocTable = () => {
  const [documents, setDocuments] = useState([]);
  const { sb_DocumentSelect, isLoading } = useSbDocuments();

  useEffect(() => {
    sb_DocumentSelect().then((data) => setDocuments(data));
  }, []);

  const rows =
    !isLoading && documents && documents.map((item: IDocument) => <MyDocRow key={item.id} {...item} />);

  return (
    // <ScrollArea mt={50} sx={{ minWidth: 800, height: 'auto', overflowY: 'visible' }}>
    <>
      <Table sx={{ minWidth: 800 }} mt={50} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Document</th>
            <th>Password</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Options</th>
          </tr>
        </thead>

        {!isLoading && documents && <tbody>{rows}</tbody>}
      </Table>

      {isLoading && (
        <Center>
          <Loader size="lg" mt="lg" />
        </Center>
      )}
    </>
    // </ScrollArea>
  );
};

export default MyDocTable;
