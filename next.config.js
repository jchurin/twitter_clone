/* eslint-disable prettier/prettier */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        // port: '',
        // pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ]
  }
}

module.exports = nextConfig
