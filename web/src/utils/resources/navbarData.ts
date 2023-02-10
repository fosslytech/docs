import {
  ArchiveFilled,
  BookFilled,
  HomeFilled,
  MailInboxFilled,
  SettingsFilled,
} from '@fluentui/react-icons';
import { ITranslations } from '@ts/global.types';

interface INavbarItem {
  text: string;
  href: string;
  icon: React.FC<{ fontSize: number; color?: string }>;
}

export const getNavbarData = (content: ITranslations): INavbarItem[] => [
  {
    text: content.navbar.links[0],
    href: '/',
    icon: HomeFilled,
  },
  {
    text: content.navbar.links[1],
    href: 'https://github.com/cufta22/odf-collab/wiki',
    icon: BookFilled,
  },
  {
    text: content.navbar.links[2],
    href: '/settings',
    icon: SettingsFilled,
  },

  {
    text: content.navbar.links[3],
    href: '/download',
    icon: MailInboxFilled,
  },
];
