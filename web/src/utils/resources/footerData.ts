import { AppFooterProps } from '@components/Footer/AppFooter';

import content from '@content/index/footer.json';

export const footerData_index: AppFooterProps = {
  data: [
    {
      title: content.links[0].title,
      links: [
        { label: content.links[0].links[0], link: '/' },
        { label: content.links[0].links[1], link: '/settings' },
        { label: content.links[0].links[2], link: '/privacy' },
      ],
    },
    {
      title: content.links[1].title,
      links: [
        { label: content.links[1].links[0], link: 'https://github.com/cufta22/odf-collab' },
        { label: content.links[1].links[1], link: '/changelog' },
        { label: content.links[1].links[2], link: '/download' },
      ],
    },
    {
      title: content.links[2].title,
      links: [
        { label: content.links[2].links[0], link: '/' },
        { label: content.links[2].links[1], link: 'https://github.com/cufta22/odf-collab' },
      ],
    },
  ],
};
