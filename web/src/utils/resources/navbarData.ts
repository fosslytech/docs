import content from '@content/index/navbar.json';
import { ArrowDownloadFilled, HomeFilled, SettingsFilled } from '@fluentui/react-icons';

interface INavbarItem {
  text: {};
  href: string;
  icon: React.FC<{ fontSize: number; color?: string }>;
}

export const navbarData: INavbarItem[] = [
  {
    text: content.navbar[0].text,
    href: '/',
    icon: HomeFilled,
  },
  {
    text: content.navbar[1].text,
    href: '/settings',
    icon: SettingsFilled,
  },
  {
    text: content.navbar[2].text,
    href: '/download',
    icon: ArrowDownloadFilled,
  },
];
