import { Table, Loader, Center, Button, Text, ScrollArea } from '@mantine/core';
import { openModal } from '@mantine/modals';
import { IconPlus, IconRefresh } from '@tabler/icons-react';
import { IApiKey, IDocument } from '@ts/supabase.types';
import { useCommonKeyMutation } from 'src/api/key/use-api-keys-mutation';
import { useApiKeysQuery } from 'src/api/key/use-api-keys-query';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import GenKeyModal from '../modals/GenKeyModal';
import KeysTableRow from './KeysTableRow';

const KeysTable = () => {
  const { translate, content } = useGlobalCtx();

  const { data: keys, isLoading } = useApiKeysQuery();
  const keyMutation = useCommonKeyMutation<null>('/api/key', 'POST');

  const handleCreateKey = async () => {
    const { data } = await keyMutation.mutateAsync(null);

    return openModal({
      title: (
        <Text size="lg" fw={600}>
          {translate(content.pages.settings.convertApi.modalGenTitle)}
        </Text>
      ),
      centered: true,
      children: <GenKeyModal value={data} />,
    });
  };

  return (
    <>
      <ScrollArea mt={50} sx={{ overflow: 'unset' }}>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>{translate(content.pages.settings.convertApi.tableLabel1)}</th>
              <th>{translate(content.pages.settings.convertApi.tableLabel2)}</th>
              <th>{translate(content.pages.settings.convertApi.tableLabel3)}</th>
              <th>{translate(content.pages.settings.convertApi.tableLabel4)}</th>
            </tr>
          </thead>

          {!isLoading && keys && (
            <tbody>
              {keys.map((item: IApiKey) => (
                <KeysTableRow key={item.id} {...item} value={item.key} />
              ))}
            </tbody>
          )}
        </Table>

        {!isLoading && !keys?.length && (
          <Center my="lg">
            <Text size="md">{translate(content.pages.settings.convertApi.tableEmpty)}</Text>
          </Center>
        )}

        {isLoading && (
          <Center my="lg">
            <Loader size="lg" />
          </Center>
        )}
      </ScrollArea>

      {!isLoading && (
        <Button
          mt="md"
          leftIcon={<IconPlus size={20} />}
          onClick={handleCreateKey}
          loading={keyMutation.isLoading}
        >
          {translate(content.pages.settings.convertApi.generateBtn)}
        </Button>
      )}
    </>
  );
};

export default KeysTable;
