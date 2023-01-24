import { showNotification, cleanNotifications } from '@mantine/notifications';

const useToast = () => {
  const send = (title: string, message: string) =>
    showNotification({
      title,
      message,
    });

  const clear = () => cleanNotifications();

  return {
    send,
    clear,
  };
};

export default useToast;
