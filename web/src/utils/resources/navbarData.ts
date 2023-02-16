import { ITranslations } from '@ts/content.types';

import { TablerIcon, IconHome, IconNotebook, IconSettings, IconDownload } from '@tabler/icons';

interface INavbarItem {
  text: string;
  href: string;
  icon: TablerIcon;
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

  {
    text: content.navbar.links[3],
    href: '/download',
    icon: IconDownload,
  },
];
