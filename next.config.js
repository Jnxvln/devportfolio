const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   images: {
      domains: ['localhost'],
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
            pathname: '/**',
         },
      ],
   },
}

module.exports = nextConfig
