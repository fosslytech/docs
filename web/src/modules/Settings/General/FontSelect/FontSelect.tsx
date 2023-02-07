import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { ChevronDownRegular, TextFontFilled } from '@fluentui/react-icons';
import useStyles from '../Select.styles';

import { IAppFont, ITranslations } from '@ts/global.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';

interface ILangData {
  label: string;
  value: IAppFont;
}

const getFontData = (content: ITranslations): ILangData[] => [
  { label: content.pages.settings.selectFontOptions.inter, value: 'Inter' },
  { label: content.pages.settings.selectFontOptions.roboto, value: 'Roboto' },
  { label: content.pages.settings.selectFontOptions.montserrat, value: 'Montserrat' },
  { label: content.pages.settings.selectFontOptions.sourceCodePro, value: 'Source Code Pro' },
];

const ThemeSelect = () => {
  const { appFont, content, changeFont, translate } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles({ opened });

  const data = getFontData(content);

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
            <TextFontFilled fontSize={20} />

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
