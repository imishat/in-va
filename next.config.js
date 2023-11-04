/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LINKEDIN: 'https://www.linkedin.com/company/invausa',
    FACEBOOK: 'https://www.facebook.com/invausa',
    YOUTUBE: 'https://www.youtube.com/invausa',
    WEBSITE: 'https://invausa.com',
    EXPERIENCE: 3,
    EMAIL: 'info@invausa.com',
    SUPPORT_EMALI: 'support@invausa.com',
    MOBILE: 'xxx xxx xxxx',
    ADDRESS: '-',
  },
  images: {
    domains: ['invausa.com'],
    // disableStaticImages: true,
  },
  webpack(config, { isServer }) {
    // Run custom scripts
    if (isServer) {
      require('./scripts/generate-sitemap')
      require('./scripts/draco')
    }

    // Import `svg` files as React components
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    })

    // Import videos, models, hdrs, and fonts
    config.module.rules.push({
      test: /\.(mp4|hdr|glb|woff|woff2|ttf)$/i,
      type: 'asset/resource',
    })

    // Force url import with `?url`
    config.module.rules.push({
      resourceQuery: /url/,
      type: 'asset/resource',
    })

    // Import `.glsl` shaders
    config.module.rules.push({
      test: /\.glsl$/,
      type: 'asset/source',
    })

    config.module.rules.push({
      test: /\.glsl$/,
      type: 'asset/source',
    })

    return config
  },
}

module.exports = nextConfig
