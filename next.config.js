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
        hostname: 'www.kino-teatr.ru',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.yaom.ru',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kino-teatr.ru',
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
        hostname: 'www.yaom.ru',
        port: '',
        pathname: '/movie/**',
      },
    ],
  },
};

module.exports = nextConfig;
