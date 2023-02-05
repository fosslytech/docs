import React from 'react';
import { DefaultSeo } from 'next-seo';
import { IFC } from '@ts/global.types';

const GlobalSEO: React.FC<IFC> = ({ children }) => {
  return (
    <DefaultSeo
      title="ODF Collab"
      description="Collaborate with others on OpenDocument Format files"
      themeColor="#25262b"
      // canonical="https://www.canonical.ie/"
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: process.env.NEXT_PUBLIC_HOST,
        siteName: 'ODF Collab',
        title: 'ODF Collab',
        description: 'Collaborate with others on OpenDocument Format files',
        images: [
          {
            url: 'https://odfcollab.com/images/og.png',
            width: 1200,
            height: 600,
            alt: 'ODF Collab og image',
            type: 'image/png',
          },
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
      additionalLinkTags={[
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ]}
    />
  );
};

export default GlobalSEO;
