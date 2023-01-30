import { useClipboard, useOs } from '@mantine/hooks';
import useToast from './use-toast';

export const useWebShare = () => {
  const os = useOs();
  const clipboard = useClipboard();

  const toast = useToast();

  const handleShare = async (url?: string) => {
    switch (os) {
      case 'android':
      case 'ios':
        try {
          await navigator.share({
            title: 'ODF Collab',
            text: 'Share this with anyone you want to collab with',
            url,
          });
        } catch (err) {
          toast.send('Error while sharing', 'Something went wrong', 'red');
        }
        break;

      case 'linux':
      case 'macos':
      case 'windows':
        clipboard.copy(window.location.toString());
        toast.send('Link copied!', 'Send this link to anyone you want to collab with');
        break;

      default:
        break;
    }
  };

  return { handleShare };
};
