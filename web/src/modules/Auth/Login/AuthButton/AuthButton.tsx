import { Button, ButtonProps } from '@mantine/core';

interface Props extends ButtonProps {
  onClick?: any;
}

const AuthButton: React.FC<Props> = (props) => {
  return (
    <Button
      {...props}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8],
        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}
    />
  );
};

export default AuthButton;
