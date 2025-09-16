/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出配置
  output: 'export',
  trailingSlash: true,

  // 图片优化
  images: {
    unoptimized: true, // 静态导出需要
  },

  // SEO优化
  generateEtags: false,
  poweredByHeader: false,

  // 性能优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 环境变量
  env: {
    SITE_URL: process.env.SITE_URL || 'https://autobusinessos.com',
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GOOGLE_ADSENSE_ID: process.env.GOOGLE_ADSENSE_ID,
  }
}

module.exports = nextConfig