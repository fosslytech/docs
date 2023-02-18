import { Avatar, Group, Menu, Text } from '@mantine/core';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

import { IconRefresh, IconLogout } from '@tabler/icons-react';

import { useApiAuth } from 'src/api/auth/use-api-auth';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import Link from 'next/link';

const HeaderAvatar = () => {
  const { translate, content } = useGlobalCtx();
  const { auth_signOut } = useApiAuth();
  const session = useSession();

  // GitHub metadata
  const ghImg = session.user.user_metadata?.avatar_url;
  const ghName = session.user.user_metadata?.user_name;

  // GitLab metadata
  const glName = session.user.user_metadata?.name;

  const avatarUrl = ghImg;
  const username = ghName || glName;

  const currentLocation = typeof window !== 'undefined' && window.location.origin;

  const authUrl = process.env.NEXT_PUBLIC_AUTH_URL + '/auth/login?redirectTo=' + currentLocation + '/doc';
  const profileUrl =
    process.env.NEXT_PUBLIC_AUTH_URL + '/auth/login?redirectTo=' + process.env.NEXT_PUBLIC_AUTH_URL + '/user';

  return (
    <Menu shadow="md" width={250} position="bottom-end" withArrow>
      <Menu.Target>
        <Avatar radius="xl" style={{ cursor: 'pointer' }} ml="lg" color="blue" src={avatarUrl} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Link href={profileUrl} target="_blank">
            <Group>
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
          </Link>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>{translate(content.header.avatar.label1)}</Menu.Label>

        <Menu.Item icon={<IconRefresh size={20} />} onClick={() => window.location.replace(authUrl)}>
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
