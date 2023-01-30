import React from 'react';
import { DefaultSeo } from 'next-seo';
import { IFC } from '@ts/global.types';

const GlobalSEO: React.FC<IFC> = ({ children }) => {
  return (
    <DefaultSeo
      title="ODF Collab"
      description="ODF Collab allows you to collaborate with others on OpenDocument Format supported documents"
      themeColor="#25262B"
      // canonical="https://www.canonical.ie/"
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: process.env.NEXT_PUBLIC_HOST,
        siteName: 'ODF Collab',
        title: 'ODF Collab',
        description:
          'ODF Collab allows you to collaborate with others on OpenDocument Format supported documents',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
      }}
      //   twitter={{
      //     handle: '@handle',
      //     site: '@site',
      //     cardType: 'summary_large_image',
      //   }}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      }}
    />
  );
};

export default GlobalSEO;
