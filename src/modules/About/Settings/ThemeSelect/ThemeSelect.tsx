import React, { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IAppTheme } from '@ts/global.types';
import useStyles from './ThemeSelect.styles';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { ChevronDownRegular } from '@fluentui/react-icons';

import logoMantine from '@icons/logos/mantine.png';
import logoMaterial from '@icons/logos/material.png';
import logoCatppuccin from '@icons/logos/catppuccin.png';

interface ILangData {
  label: string;
  value: IAppTheme;
  image: string;
}

const getLangData = (): ILangData[] => [
  { label: 'Mantine', value: 'Mantine', image: logoMantine.src },
  { label: 'Material', value: 'Material', image: logoMaterial.src },
  { label: 'Catppuccin', value: 'Catppuccin', image: logoCatppuccin.src },
];

const ThemeSelect = () => {
  const data = getLangData();

  const { appTheme, changeTheme } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);

  const { classes } = useStyles({ opened });

  const selected = data.find((l) => l.value === appTheme);

  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} alt={item.label + ' logo'} />}
      onClick={() => changeTheme(item.value)}
      key={item.label}
      pt={10}
      pb={10}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target">
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image src={selected.image} width={22} height={22} alt={selected.label + ' logo'} />

            <span className={classes.label}>{selected.label}</span>
          </Group>

          <ChevronDownRegular fontSize={16} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default ThemeSelect;
