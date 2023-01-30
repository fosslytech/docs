import { AppFooterProps } from '@components/Footer/AppFooter';

export const footerData_index: AppFooterProps = {
  data: [
    {
      title: 'About',
      links: [
        { label: 'Home', link: '/' },
        { label: 'Download', link: '/download' },
        { label: 'Settings', link: '/settings' },
      ],
    },
    {
      title: 'Project',
      links: [
        { label: 'Contribute', link: 'https://github.com/cufta22/odf-collab' },
        { label: 'Changelog', link: '/changelog' },
        { label: 'Releases', link: '/download' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Join Discord', link: '/' },
        { label: 'GitHub Discussion', link: 'https://github.com/cufta22/odf-collab' },
        // { label: 'Follow on Twitter', link: '/' },
      ],
    },
  ],
};
