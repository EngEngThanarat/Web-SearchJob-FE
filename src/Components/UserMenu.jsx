import { Menu, Group, Text, Avatar, useMantineTheme, ActionIcon } from '@mantine/core';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronRight,
  IconUser,
} from '@tabler/icons-react';

export function UserMenu() {
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: 'pop' }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon>
          <Avatar
                radius="xl"
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
              <div>
                <Text size={'sm'} weight={500} pl={10} pt={10} pb={10}>Nancy Eggshacker</Text>
              </div>

          <Menu.Divider />

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>Account settings</Menu.Item>
          <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}