import React from 'react';
import { ITranslations } from '@ts/content.types';

import { TablerIconsProps, IconHome, IconNotebook, IconSettings, IconDownload } from '@tabler/icons-react';

interface INavbarItem {
  text: string;
  href: string;
  icon: React.FC<TablerIconsProps>;
}

export const getNavbarData = (content: ITranslations): INavbarItem[] => [
  {
    text: content.navbar.links[0],
    href: '/',
    icon: IconHome,
  },
  {
    text: content.navbar.links[1],
    href: 'https://github.com/fosslytech/odf-collab/wiki',
    icon: IconNotebook,
  },
  {
    text: content.navbar.links[2],
    href: '/settings',
    icon: IconSettings,
  },
];
