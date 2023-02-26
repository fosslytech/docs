import React from 'react';
import { DefaultSeo } from 'next-seo';
import { IFC } from '@ts/global.types';

const GlobalSEO: React.FC<IFC> = ({ children }) => {
  return (
    <DefaultSeo
      title="Fossly Docs"
      description="Free & Open source document management app"
      themeColor="#25262b"
      canonical="https://www.canonical.ie/"
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: process.env.NEXT_PUBLIC_HOST,
        siteName: 'Fossly Docs',
        title: 'Fossly Docs',
        description: 'Free & Open source document management app',
        images: [
          {
            url: 'https://docs.fossly.tech/images/og.png',
            width: 1200,
            height: 600,
            alt: 'Fossly Docs og image',
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
        // <link rel="apple-touch-icon" href="/example.png">
        {
          rel: 'apple-touch-icon',
          href: '/icons/192x192.png',
        },
      ]}
    />
  );
};

export default GlobalSEO;
