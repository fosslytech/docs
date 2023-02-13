import { ArrowSyncFilled, DocumentTextFilled, SettingsFilled, SignOutFilled } from '@fluentui/react-icons';
import { Avatar, Group, Menu, Text, useMantineTheme } from '@mantine/core';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

import { useApiAuth } from 'src/api/auth/use-api-auth';

const HeaderAvatar = () => {
  const { auth_signOut } = useApiAuth();
  const router = useRouter();
  const session = useSession();
  const theme = useMantineTheme();

  // GitHub metadata
  const ghImg = session.user.user_metadata?.avatar_url;
  const ghName = session.user.user_metadata?.user_name;

  return (
    <Menu shadow="md" width={250} position="bottom-end" withArrow>
      <Menu.Target>
        <Avatar radius="xl" style={{ cursor: 'pointer' }} ml="lg" color="blue" src={ghImg}>
          {/* <PersonFilled fontSize={24} /> */}
          {/* {user.username.substring(0, 2)} */}
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Group onClick={() => router.push('/profile')}>
            <Avatar radius="xl" src={ghImg} />

            <div style={{ width: 160 }}>
              {ghName && (
                <Text weight={500} truncate>
                  {ghName}
                </Text>
              )}

              <Text size="xs" color="dimmed" truncate>
                {session.user.email}
              </Text>
            </div>
          </Group>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Resources</Menu.Label>

        <Menu.Item icon={<DocumentTextFilled fontSize={20} />} onClick={() => router.push('/doc')}>
          My documents
        </Menu.Item>

        <Menu.Item icon={<SettingsFilled fontSize={20} />} onClick={() => router.push('/settings')}>
          Settings
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Actions</Menu.Label>

        <Menu.Item icon={<ArrowSyncFilled fontSize={20} />} onClick={() => router.push('/auth/login')}>
          Switch account
        </Menu.Item>

        <Menu.Item color="yellow" icon={<SignOutFilled fontSize={20} />} onClick={() => auth_signOut()}>
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderAvatar;
