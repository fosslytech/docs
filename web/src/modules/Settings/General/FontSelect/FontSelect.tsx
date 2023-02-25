import { useState } from 'react';
import { UnstyledButton, Menu, Group, Text } from '@mantine/core';
import useStyles from '../Select.styles';

import { IAppFont } from '@ts/global.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { ITranslations } from '@ts/content.types';

import { IconTypography, IconChevronDown } from '@tabler/icons-react';

interface ILangData {
  label: string;
  value: IAppFont;
}

const getFontData = (content: ITranslations): ILangData[] => [
  { label: content.pages.settings.general.selectFontOptions.inter, value: 'Inter' },
  { label: content.pages.settings.general.selectFontOptions.roboto, value: 'Roboto' },
  { label: content.pages.settings.general.selectFontOptions.montserrat, value: 'Montserrat' },
  { label: content.pages.settings.general.selectFontOptions.sourceCodePro, value: 'Source Code Pro' },
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
          <Group spacing="xs" style={{ flex: 1 }}>
            <IconTypography size={20} />

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
