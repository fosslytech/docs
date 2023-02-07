import { useState } from 'react';
import { UnstyledButton, Menu, Group, DefaultMantineColor, ColorSwatch } from '@mantine/core';
import { ChevronDownRegular } from '@fluentui/react-icons';
import useStyles from '../Select.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';
import { ITranslations } from '@ts/global.types';

interface IColorData {
  label: string;
  value: DefaultMantineColor;
}

const getLangData = (content: ITranslations): IColorData[] => [
  { label: content.pages.settings.selectPrimaryColorOptions.blue, value: 'blue' },
  { label: content.pages.settings.selectPrimaryColorOptions.red, value: 'red' },
  { label: content.pages.settings.selectPrimaryColorOptions.green, value: 'green' },
  { label: content.pages.settings.selectPrimaryColorOptions.yellow, value: 'yellow' },
  { label: content.pages.settings.selectPrimaryColorOptions.pink, value: 'pink' },
  { label: content.pages.settings.selectPrimaryColorOptions.teal, value: 'teal' },
];

const PrimaryColorSelect = () => {
  const { appPrimaryColor, content, changePrimaryColor, translate } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);
  const { classes, theme } = useStyles({ opened });

  const data = getLangData(content);

  const selected = data.find((l) => l.value === appPrimaryColor);

  const items = data.map((item) => (
    <Menu.Item
      icon={<ColorSwatch color={theme.colors[item.value][6]} size={18} />}
      onClick={() => changePrimaryColor(item.value)}
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
            <ColorSwatch color={theme.colors[selected.value][6]} size={20} />

            <span className={classes.label}> {translate(selected.label)}</span>
          </Group>

          <ChevronDownRegular fontSize={16} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default PrimaryColorSelect;
