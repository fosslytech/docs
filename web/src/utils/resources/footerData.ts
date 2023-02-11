import { AppFooterData } from '@components/Footer/AppFooter';

import { ITranslations } from '@ts/global.types';

export const getFooterData_index = (content: ITranslations): AppFooterData[] => [
  {
    title: content.footer.links[0].title,
    links: [
      { label: content.footer.links[0].links[0], link: '/' },
      { label: content.footer.links[0].links[1], link: '/settings' },
      { label: content.footer.links[0].links[2], link: '/privacy' },
    ],
  },
  {
    title: content.footer.links[1].title,
    links: [
      { label: content.footer.links[1].links[0], link: 'https://github.com/cufta22/odf-collab' },
      { label: content.footer.links[1].links[1], link: '/changelog' },
      { label: content.footer.links[1].links[2], link: 'https://github.com/cufta22/odf-collab/wiki' },
    ],
  },
  {
    title: content.footer.links[2].title,
    links: [
      { label: content.footer.links[2].links[0], link: 'https://discord.gg/UygKwaj3' },
      { label: content.footer.links[2].links[1], link: 'https://github.com/cufta22/odf-collab' },
    ],
  },
];
