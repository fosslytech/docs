import { useState } from 'react';
import { UnstyledButton, Menu, Group } from '@mantine/core';
import { ChevronDownRegular } from '@fluentui/react-icons';
import useStyles from '../Select.styles';

import { ITranslations } from '@ts/global.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { useRouter } from 'next/router';

import { USFlag, DEFlag, FlagProps } from 'mantine-flagpack';

interface ILangData {
  label: string;
  value: string;
  icon: React.FC<FlagProps>;
}

const getLangData = (content: ITranslations): ILangData[] => [
  { label: content.pages.settings.selectLangOptions.en, value: 'en', icon: USFlag },
  { label: content.pages.settings.selectLangOptions.de, value: 'de', icon: DEFlag },
];

const LanguageSelect = () => {
  const router = useRouter();

  const { content, translate } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles({ opened });

  const changeLanguage = (newLocal: string) => {
    router.push(router.pathname, router.pathname, { locale: newLocal });
  };

  const data = getLangData(content);

  const selected = data.find((l) => l.value === router.locale);

  const items = data.map((item) => (
    <Menu.Item
      icon={<item.icon w={25} radius="xs" />}
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
            <selected.icon w={27} radius="xs" />

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
