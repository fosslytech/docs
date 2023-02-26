import useToast from '@hooks/use-toast';
import { Button, Group, Text, TextInput, ThemeIcon } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { closeAllModals } from '@mantine/modals';
import { IconCopy, IconKey } from '@tabler/icons-react';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface Props {
  value: string;
}

const GenKeyModal: React.FC<Props> = ({ value }) => {
  const { translate, content } = useGlobalCtx();
  const clipboard = useClipboard();
  const toast = useToast();

  const handleClose = async () => {
    closeAllModals();
  };

  const handleCopy = () => {
    clipboard.copy(value);
    toast.send('API key copied', '');
  };

  return (
    <>
      <Text mb="xl" size="sm">
        {translate(content.pages.settings.convertApi.modalGenDescription)}
      </Text>

      <Group>
        <TextInput icon={<IconKey size={20} />} defaultValue={value} sx={{ flex: 1 }} />

        <ThemeIcon onClick={handleCopy} size={36} color="gray" sx={{ cursor: 'pointer' }}>
          <IconCopy size={24} />
        </ThemeIcon>
      </Group>

      <Button mt="xl" fullWidth onClick={handleClose}>
        {translate(content.pages.settings.convertApi.modalGenBtn)}
      </Button>
    </>
  );
};

export default GenKeyModal;
