import { Button, ButtonProps } from '@mantine/core';

interface Props extends ButtonProps {
  onClick?: any;
}

const AuthButton: React.FC<Props> = (props) => {
  return (
    <Button
      {...props}
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[theme.colorScheme === 'dark' ? 6 : 6],
        color: '#fff',
        '&:hover': {
          backgroundColor: theme.colors.dark[theme.colorScheme === 'dark' ? 5 : 5],
        },
      })}
    />
  );
};

export default AuthButton;
