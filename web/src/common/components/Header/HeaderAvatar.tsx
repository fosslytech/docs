import { Avatar, Group, Menu, Text } from '@mantine/core';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

import { IconRefresh, IconLogout } from '@tabler/icons';

import { useApiAuth } from 'src/api/auth/use-api-auth';
import useGlobalCtx from 'src/store/global/use-global-ctx';

const HeaderAvatar = () => {
  const { translate, content } = useGlobalCtx();
  const { auth_signOut } = useApiAuth();
  const router = useRouter();
  const session = useSession();

  // GitHub metadata
  const ghImg = session.user.user_metadata?.avatar_url;
  const ghName = session.user.user_metadata?.user_name;

  // GitLab metadata
  const glName = session.user.user_metadata?.name;

  const avatarUrl = ghImg;
  const username = ghName || glName;

  console.log(session?.user);

  return (
    <Menu shadow="md" width={250} position="bottom-end" withArrow>
      <Menu.Target>
        <Avatar radius="xl" style={{ cursor: 'pointer' }} ml="lg" color="blue" src={avatarUrl}>
          {/* <PersonFilled fontSize={24} /> */}
          {/* {user.username.substring(0, 2)} */}
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Group onClick={() => router.push('/profile')}>
            <Avatar radius="xl" src={avatarUrl} />

            <div style={{ width: 160 }}>
              {username && (
                <Text weight={500} truncate>
                  {username}
                </Text>
              )}

              <Text size="xs" color="dimmed" truncate>
                {session.user.email}
              </Text>
            </div>
          </Group>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>{translate(content.header.avatar.label1)}</Menu.Label>

        <Menu.Item icon={<IconRefresh size={20} />} onClick={() => router.push('/auth/login')}>
          {translate(content.header.avatar.switchAcc)}
        </Menu.Item>

        <Menu.Item color="yellow" icon={<IconLogout size={20} />} onClick={() => auth_signOut()}>
          {translate(content.header.avatar.signOut)}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderAvatar;
