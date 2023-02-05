const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// withPWA config
const nextConfigWithPWA = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
})(nextConfig);

module.exports = nextConfigWithPWA;
