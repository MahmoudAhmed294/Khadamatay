import { showNotification } from '@mantine/notifications';
import { ReactNode } from 'react';
import { IconX } from '@tabler/icons';
import type { NotificationProps } from '@mantine/notifications';

interface ErrorHandlerProps extends Omit<NotificationProps, 'message'> {
  message?: ReactNode;
  error: unknown;
}

const errorHandler = ({ title, message, error }: ErrorHandlerProps) => {
  return showNotification({
    title,
    message,
    color: 'red',
    icon: <IconX />,
    autoClose: 8000,
  });
};

export { errorHandler };
