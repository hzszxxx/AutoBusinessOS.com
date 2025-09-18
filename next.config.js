/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出配置
  output: 'export',
  trailingSlash: true,

  // 图片优化
  images: {
    unoptimized: true, // 静态导出需要
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },

  // SEO优化
  generateEtags: false,
  poweredByHeader: false,

  // 性能优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 实验性功能 - 静态导出时禁用某些优化
  experimental: {
    // optimizeCss: true, // 在静态导出时可能有问题
    optimizeServerReact: true,
  },

  // Webpack优化
  webpack: (config, { dev, isServer }) => {
    // 性能优化
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };

    return config;
  },

  // 注意：静态导出模式下不支持 headers 配置
  // 这些头部需要在服务器层面配置（如Nginx、Cloudflare等）

  // 环境变量
  env: {
    SITE_URL: process.env.SITE_URL || 'https://autobusinessos.com',
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GOOGLE_ADSENSE_ID: process.env.GOOGLE_ADSENSE_ID,
  }
}

module.exports = nextConfig