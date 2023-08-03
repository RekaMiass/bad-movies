/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kino-teatr.ru',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kino-teatr.ru',
        port: '',
        pathname: '/movie/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/movie/**',
      },
      {
        protocol: 'https',
        hostname: 'yaom.ru',
        port: '',
        pathname: '/movie/**',
      },
    ],
  },
};

module.exports = nextConfig;
