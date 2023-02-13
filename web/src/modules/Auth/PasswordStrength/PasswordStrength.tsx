import { Progress, Text, Popover, Box } from '@mantine/core';
import { CheckmarkRegular, DismissRegular } from '@fluentui/react-icons';
import { IFC } from '@ts/global.types';
import { PASSWORD_LENGTH } from '@utils/constants/auth';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text color={meets ? 'teal' : 'red'} sx={{ display: 'flex', alignItems: 'center' }} mt={7} size="sm">
      {meets ? <CheckmarkRegular /> : <DismissRegular />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  //   { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > PASSWORD_LENGTH - 1 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

interface Props extends IFC {
  value: string;
}

const PasswordStrength: React.FC<Props> = ({ children, value }) => {
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover
      // opened={popoverOpened}
      position="bottom-start"
      // placement="start"
      withArrow
      // styles={{ dropdown: { width: '100%' } }}
      trapFocus={false}
      transition="pop-top-left"
      // onFocusCapture={() => setPopoverOpened(true)}
      // onBlurCapture={() => setPopoverOpened(false)}
      // target={children}
      // className={className}
    >
      <Popover.Target>{children}</Popover.Target>

      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
};

export default PasswordStrength;
