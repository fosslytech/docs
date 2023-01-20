import React, { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IAppFont } from '@ts/global.types';
import useStyles from './FontSelect.styles';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { ChevronDownRegular, TextFontFilled } from '@fluentui/react-icons';

import logoMantine from '@icons/logos/mantine.png';
import logoMaterial from '@icons/logos/material.png';
import logoCatppuccin from '@icons/logos/catppuccin.png';

interface ILangData {
  label: string;
  value: IAppFont;
}

const getFontData = (): ILangData[] => [
  { label: 'Inter', value: 'Inter' },
  { label: 'Roboto', value: 'Roboto' },
  { label: 'Montserrat', value: 'Montserrat' },
  { label: 'Source Code Pro', value: 'Source Code Pro' },
];

const ThemeSelect = () => {
  const data = getFontData();

  const { appFont, changeFont } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);

  const { classes } = useStyles({ opened });

  const selected = data.find((l) => l.value === appFont);

  const items = data.map((item) => (
    <Menu.Item onClick={() => changeFont(item.value)} key={item.label} pt={10} pb={10}>
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target">
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            {/* <Image src={selected.image} width={22} height={22} /> */}
            <TextFontFilled fontSize={22} />

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
