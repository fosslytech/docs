import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { ChevronDownRegular, TextFontFilled } from '@fluentui/react-icons';
import useStyles from './FontSelect.styles';

import { IAppFont } from '@ts/global.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/settings/settings.json';

interface ILangData {
  label: {};
  value: IAppFont;
}

const getFontData = (): ILangData[] => [
  { label: content.settings.selectFontOptions.inter, value: 'Inter' },
  { label: content.settings.selectFontOptions.roboto, value: 'Roboto' },
  { label: content.settings.selectFontOptions.montserrat, value: 'Montserrat' },
  { label: content.settings.selectFontOptions.sourceCodePro, value: 'Source Code Pro' },
];

const ThemeSelect = () => {
  const data = getFontData();
  const { appFont, changeFont, translate } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles({ opened });

  const selected = data.find((l) => l.value === appFont);

  const items = data.map((item) => (
    <Menu.Item onClick={() => changeFont(item.value)} key={item.value} pt={10} pb={10}>
      {translate(item.label)}
    </Menu.Item>
  ));

  return (
    <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target">
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            {/* <Image src={selected.image} width={22} height={22} /> */}
            <TextFontFilled fontSize={22} />

            <span className={classes.label}>{translate(selected.label)}</span>
          </Group>

          <ChevronDownRegular fontSize={16} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default ThemeSelect;
