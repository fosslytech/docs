const withPWA = require('@ducanh2912/next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'de', 'fr'],
    defaultLocale: 'en',
  },
};

// withPWA config
const nextConfigWithPWA = withPWA.default({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);

module.exports = nextConfigWithPWA;
