import { Button, Divider, Flex, Pagination, Progress, RingProgress, Text } from '@mantine/core';
import { IconPlus, IconRefresh } from '@tabler/icons-react';
import { IDocument } from '@ts/supabase.types';
import Link from 'next/link';
import React, { Dispatch } from 'react';
import { useQueryClient } from 'react-query';
import { QUERY_KEYS } from 'src/api/queryKeys';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  documents: IDocument[];
  total: number;
  page: number;
  setPage: Dispatch<number>;
}

const TableTop: React.FC<Props> = ({ documents, page, setPage, total }) => {
  const { translate, content } = useGlobalCtx();
  const queryClient = useQueryClient();

  const odtCount = documents?.filter((d) => d.ext === 'odt').length;
  const odsCount = documents?.filter((d) => d.ext === 'ods').length;

  return (
    <>
      <Flex p="xs" bg="dark.7" gap="md" align="center">
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

        <div style={{ flex: 1 }}></div>

        {documents?.length ? (
          <Progress
            w={200}
            size="lg"
            sections={[
              { value: odtCount * (100 / 25), color: 'blue', tooltip: `Text - ${odtCount}` },
              { value: odsCount * (100 / 25), color: 'green', tooltip: `Spreadsheet - ${odsCount}` },
            ]}
          />
        ) : null}

        {documents && total > 1 && <Pagination page={page} onChange={setPage} total={total} size="md" />}
      </Flex>

      <Divider />
    </>
  );
};

export default TableTop;
