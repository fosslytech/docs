import { MantineColor } from '@mantine/core';
import { showNotification, cleanNotifications } from '@mantine/notifications';

const useToast = () => {
  const send = (title: string, message: string, color?: MantineColor) =>
    showNotification({
      title,
      message,
      color: color || 'blue',
    });

  const clear = () => cleanNotifications();

  return {
    send,
    clear,
  };
};

export default useToast;
