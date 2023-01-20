import React, { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { ILang } from '@ts/global.types';
import useStyles from './LanguageSelect.styles';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { ChevronDownRegular } from '@fluentui/react-icons';

import FlagEN from '@icons/flags/FlagEN';

interface ILangData {
  label: string;
  value: ILang;
  icon: React.FC<any>;
}

const getLangData = (): ILangData[] => [{ label: 'English', value: 'EN', icon: FlagEN }];

const LanguageSelect = () => {
  const data = getLangData();

  const { language, changeLanguage } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);

  const { classes } = useStyles({ opened });

  const selectedLang = data.find((l) => l.value === language);

  const items = data.map((item) => (
    <Menu.Item
      icon={<item.icon width={22} />}
      onClick={() => changeLanguage(item.value)}
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
            {/* <selected.icon fontSize={22} /> */}
            <selectedLang.icon width={22} />

            <span className={classes.label}>{selectedLang.label}</span>
          </Group>

          <ChevronDownRegular fontSize={16} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default LanguageSelect;
