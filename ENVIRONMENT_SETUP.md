# AutoBusinessOS 环境配置指南

## 🌐 Vercel 环境变量配置

### 必需的环境变量

在 Vercel Dashboard 的 Settings > Environment Variables 中添加以下变量：

#### 1. Google Analytics 配置
```
变量名: NEXT_PUBLIC_GA_MEASUREMENT_ID
值: G-XXXXXXXXXX (替换为您的实际GA4测量ID)
环境: Production, Preview, Development
```

#### 2. Google Ads 配置
```
变量名: NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
值: AW-XXXXXXXXX (替换为您的实际Google Ads转化ID)
环境: Production, Preview, Development
```

#### 3. 网站URL配置
```
变量名: SITE_URL
值: https://autobusinessos.com
环境: Production, Preview, Development
```

#### 4. 可选配置
```
变量名: NEXT_PUBLIC_GOOGLE_ADSENSE_ID
值: ca-pub-XXXXXXXXXX (如果您使用AdSense)
环境: Production, Preview, Development
```

## 🔧 配置步骤

### 1. 访问Vercel Dashboard
- 打开: https://vercel.com/coleneplattebcg94-6808s-projects/autobusinessos/settings
- 点击左侧菜单 "Environment Variables"

### 2. 添加环境变量
1. 点击 "Add New" 按钮
2. 输入变量名和值
3. 选择适用的环境（建议全选）
4. 点击 "Save"

### 3. 重新部署
添加环境变量后，需要重新部署项目：
```bash
vercel --prod
```

## 📊 Google Analytics 设置

### 1. 创建GA4属性
1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建新属性
3. 选择 "Web" 平台
4. 输入网站URL: https://autobusinessos.com
5. 获取测量ID (格式: G-XXXXXXXXXX)

### 2. 配置转化事件
在GA4中设置以下转化事件：
- `roi_calculator_complete` - ROI计算器完成
- `email_subscription` - 邮件订阅
- `contact_form_submit` - 联系表单提交
- `page_engagement` - 页面参与度

## 🎯 Google Ads 设置

### 1. 创建转化操作
1. 访问 [Google Ads](https://ads.google.com/)
2. 进入 "工具和设置" > "转化"
3. 创建新的转化操作
4. 选择 "网站" 作为转化来源
5. 获取转化ID (格式: AW-XXXXXXXXX)

### 2. 设置转化标签
为以下操作创建转化标签：
- ROI计算器完成
- 邮件订阅
- 联系表单提交
- 高价值页面浏览

## 🔍 验证配置

### 1. 检查环境变量
```bash
# 在Vercel Dashboard中查看环境变量是否正确设置
```

### 2. 测试Google Analytics
1. 访问网站
2. 打开浏览器开发者工具
3. 查看Network标签页中的Google Analytics请求
4. 确认数据发送到正确的测量ID

### 3. 测试Google Ads
1. 访问网站
2. 执行转化操作（如使用ROI计算器）
3. 在Google Ads中查看转化数据

## 🚀 性能优化建议

### 1. 启用Vercel Analytics
1. 在Vercel Dashboard中启用Analytics
2. 这将提供额外的性能监控数据

### 2. 配置CDN
Vercel自动提供全球CDN，无需额外配置

### 3. 图片优化
项目已配置Next.js图片优化，自动处理WebP格式

## 📈 监控和报告

### 1. 设置监控
- 在Vercel Dashboard中设置Uptime监控
- 配置错误报告和性能监控

### 2. 定期检查
- 每周检查网站性能
- 每月审查分析数据
- 根据数据优化转化流程

## 🆘 故障排除

### 常见问题
1. **环境变量未生效**: 重新部署项目
2. **Google Analytics无数据**: 检查测量ID是否正确
3. **转化追踪失败**: 验证转化ID和标签设置

### 联系支持
- Vercel支持: https://vercel.com/help
- Google Analytics支持: https://support.google.com/analytics
- Google Ads支持: https://support.google.com/google-ads
