/** @type {import('next').NextConfig} */
const {withContentLayer} = require('next-contentlayer')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.fallback = { fs: false };

    return config;
  },
} ;

module.exports = withContentLayer(nextConfig);


// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   }
// }
