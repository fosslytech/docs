import { useState } from 'react';
import { UnstyledButton, Menu, Group } from '@mantine/core';
import { ChevronDownRegular } from '@fluentui/react-icons';
import useStyles from '../Select.styles';

import { ILang } from '@ts/global.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import FlagEN from '@icons/flags/FlagEN';

import content from '@content/settings/settings.json';

interface ILangData {
  label: {};
  value: ILang;
  icon: React.FC<any>;
}

const getLangData = (): ILangData[] => [
  { label: content.settings.selectLangOptions.english, value: 'EN', icon: FlagEN },
];

const LanguageSelect = () => {
  const data = getLangData();
  const { language, changeLanguage, translate } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles({ opened });

  const selected = data.find((l) => l.value === language);

  const items = data.map((item) => (
    <Menu.Item
      icon={<item.icon width={22} />}
      onClick={() => changeLanguage(item.value)}
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
          <Group spacing="xs">
            {/* <selected.icon fontSize={22} /> */}
            <selected.icon width={22} />

            <span className={classes.label}>{translate(selected.label)}</span>
          </Group>

          <ChevronDownRegular fontSize={16} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default LanguageSelect;
