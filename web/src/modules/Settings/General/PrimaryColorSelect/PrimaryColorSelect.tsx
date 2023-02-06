import { useState } from 'react';
import { UnstyledButton, Menu, Group, DefaultMantineColor, ColorSwatch } from '@mantine/core';
import { ChevronDownRegular } from '@fluentui/react-icons';
import useStyles from '../Select.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import content from '@content/settings/settings.json';

interface IColorData {
  label: {};
  value: DefaultMantineColor;
}

const getLangData = (): IColorData[] => [
  { label: content.settings.selectPrimaryColorOptions.blue, value: 'blue' },
  { label: content.settings.selectPrimaryColorOptions.red, value: 'red' },
  { label: content.settings.selectPrimaryColorOptions.green, value: 'green' },
  { label: content.settings.selectPrimaryColorOptions.yellow, value: 'yellow' },
  { label: content.settings.selectPrimaryColorOptions.pink, value: 'pink' },
  { label: content.settings.selectPrimaryColorOptions.teal, value: 'teal' },
];

const PrimaryColorSelect = () => {
  const data = getLangData();
  const { appPrimaryColor, changePrimaryColor, translate } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);
  const { classes, theme } = useStyles({ opened });

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
            <ColorSwatch color={theme.colors[selected.value][6]} size={18} />

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
