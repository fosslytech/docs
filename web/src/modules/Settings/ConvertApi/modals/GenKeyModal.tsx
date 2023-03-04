import { ActionIcon, Button, CopyButton, Group, Text, TextInput, Tooltip } from '@mantine/core';
import { closeAllModals } from '@mantine/modals';
import { IconCheck, IconCopy, IconKey } from '@tabler/icons-react';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  value: string;
}

const GenKeyModal: React.FC<Props> = ({ value }) => {
  const { translate, content } = useGlobalCtx();

  const handleClose = async () => {
    closeAllModals();
  };

  return (
    <>
      <Text mb="xl" size="sm">
        {translate(content.pages.settings.convertApi.modalGenDescription)}
      </Text>

      <Group>
        <TextInput icon={<IconKey size={20} />} defaultValue={value} sx={{ flex: 1 }} />

        <CopyButton value={value} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
              <ActionIcon size="lg" color={copied ? 'teal' : 'gray'} onClick={copy}>
                {copied ? <IconCheck size={22} /> : <IconCopy size={22} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>

      <Button mt="xl" fullWidth onClick={handleClose}>
        {translate(content.pages.settings.convertApi.modalGenBtn)}
      </Button>
    </>
  );
};

export default GenKeyModal;
