import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group, Text } from '@mantine/core';
import useStyles from '../Select.styles';

import { IAppTheme } from '@ts/global.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { ITranslations } from '@ts/content.types';

import { IconChevronDown } from '@tabler/icons';

interface ILangData {
  label: string;
  value: IAppTheme;
  image: string;
}

const getLangData = (content: ITranslations): ILangData[] => [
  {
    label: content.pages.settings.selectThemeOptions.mantine,
    value: 'Mantine',
    image: '/assets/mantine.png',
  },
  {
    label: content.pages.settings.selectThemeOptions.catppuccin,
    value: 'Catppuccin',
    image: '/assets/catppuccin.png',
  },
];

const ThemeSelect = () => {
  const { appTheme, content, changeTheme, translate } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles({ opened });

  const data = getLangData(content);

  const selected = data.find((l) => l.value === appTheme);

  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} alt={item.label + ' logo'} />}
      onClick={() => changeTheme(item.value)}
      key={item.value}
      pt={10}
      pb={10}
    >
      {translate(item.label)}
    </Menu.Item>
  ));

  return (
    <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target">
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs" style={{ flex: 1 }}>
            <Image src={selected.image} width={20} height={20} alt={selected.label + ' logo'} />
            <div className={classes.label} style={{ width: '70%' }}>
              <Text truncate>{translate(selected.label)}</Text>
            </div>
          </Group>

          <IconChevronDown size={18} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default ThemeSelect;
