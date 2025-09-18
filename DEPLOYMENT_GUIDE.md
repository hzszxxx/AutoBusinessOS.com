# AutoBusinessOS.com 部署指南

## 🚀 部署概览

本项目采用静态站点生成(SSG)，支持多种部署平台。推荐使用Vercel或Netlify进行部署，同时提供其他平台的部署方案。

## 📋 部署前检查清单

### 必要配置项
- [ ] 环境变量配置
- [ ] 域名DNS设置
- [ ] SSL证书配置
- [ ] Google Analytics设置
- [ ] Google Ads配置
- [ ] 性能监控配置

### 可选优化项
- [ ] CDN配置
- [ ] 缓存策略
- [ ] 图片优化
- [ ] 安全头配置

## 🌐 推荐部署平台

### 1. Vercel 部署（推荐）

#### 优势
- 自动SSL证书
- 全球CDN
- 自动预览部署
- 优秀的Next.js支持

#### 部署步骤
```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录Vercel
vercel login

# 3. 部署项目
vercel

# 4. 生产部署
vercel --prod
```

#### 环境变量配置
在Vercel Dashboard中设置：
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
SITE_URL=https://autobusinessos.com
```

### 2. Netlify 部署

#### 部署配置文件
```toml
# netlify.toml
[build]
  publish = "out"
  command = "npm run build"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[build.environment]
  NODE_VERSION = "18"
```

### 3. 自托管部署

#### Nginx 配置示例
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name autobusinessos.com www.autobusinessos.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name autobusinessos.com www.autobusinessos.com;

    # SSL配置
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;

    # 站点根目录
    root /var/www/autobusinessos/out;
    index index.html;

    # 压缩配置
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript
               application/x-javascript application/xml+rss
               application/javascript application/json;

    # 缓存配置
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        expires 6M;
        add_header Cache-Control "public";
    }

    # 安全头
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # 页面路由
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # 错误页面
    error_page 404 /404.html;
}
```

## 🔧 构建和部署脚本

### package.json 脚本
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "deploy:vercel": "vercel --prod",
    "deploy:netlify": "netlify deploy --prod",
    "test:build": "npm run build && npm run serve",
    "serve": "npx serve out",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

### CI/CD 配置

#### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run tests
      run: npm run lint

    - name: Build project
      run: npm run build
      env:
        NEXT_PUBLIC_GA_MEASUREMENT_ID: ${{ secrets.GA_MEASUREMENT_ID }}
        NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID: ${{ secrets.GOOGLE_ADS_ID }}

    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 🌍 域名和DNS配置

### DNS记录配置
```
类型    名称    值
A       @       76.76.19.61
CNAME   www     autobusinessos.vercel.app
TXT     @       "v=spf1 include:_spf.google.com ~all"
```

### 子域名建议
- `www.autobusinessos.com` - 主站点
- `blog.autobusinessos.com` - 博客（未来扩展）
- `app.autobusinessos.com` - 应用程序（未来扩展）
- `api.autobusinessos.com` - API服务（未来扩展）

## 📊 监控和分析配置

### 1. 性能监控
```javascript
// 添加到 _app.js 或 layout.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // 发送到监控服务
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify(metric)
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### 2. 错误监控配置

#### Sentry集成
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_DSN_HERE",
  tracesSampleRate: 1.0,
});
```

### 3. 运行时监控

#### 健康检查端点
```javascript
// pages/api/health.js
export default function handler(req, res) {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version
  });
}
```

## 🔐 安全配置

### 1. 环境变量管理
```bash
# .env.local (开发环境)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
SITE_URL=http://localhost:3000

# .env.production (生产环境)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YYYYYYYYYY
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-YYYYYYYYY
SITE_URL=https://autobusinessos.com
```

### 2. 安全头配置
已在Nginx配置中包含，Vercel/Netlify用户需要在平台设置中配置。

## 🚀 部署检查清单

### 部署前
- [ ] 运行完整的构建测试
- [ ] 检查所有环境变量
- [ ] 验证Google Analytics配置
- [ ] 确认Google Ads设置
- [ ] 测试所有表单功能
- [ ] 验证SEO元数据

### 部署后
- [ ] 验证站点可访问性
- [ ] 检查SSL证书状态
- [ ] 测试页面加载速度
- [ ] 验证Google Analytics数据
- [ ] 确认转化追踪工作
- [ ] 检查所有页面响应

### 监控设置
- [ ] 设置uptime监控
- [ ] 配置错误报告
- [ ] 启用性能监控
- [ ] 设置安全扫描
- [ ] 配置备份策略

## 🔄 维护和更新

### 定期维护任务
- **每周**: 检查网站性能和错误
- **每月**: 更新依赖包和安全补丁
- **每季度**: 审查分析数据和优化策略
- **每年**: 更新SSL证书和域名续费

### 监控指标
- 页面加载时间 < 2秒
- Core Web Vitals 达到"良好"标准
- 正常运行时间 > 99.9%
- 错误率 < 0.1%

## 📞 紧急联系和支持

### 关键服务商联系方式
- **域名服务商**: [联系方式]
- **托管平台**: [联系方式]
- **SSL证书提供商**: [联系方式]
- **监控服务**: [联系方式]

### 故障恢复流程
1. 确认问题范围和影响
2. 检查监控警报和日志
3. 执行标准故障排除步骤
4. 必要时回滚到上一个稳定版本
5. 问题解决后进行事后总结