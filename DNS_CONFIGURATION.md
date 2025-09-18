# DNS配置指南 - AutoBusinessOS.com

## 当前状态
- ✅ 域名 `autobusinessos.com` 已在Vercel中注册
- ✅ 项目 `autobusinessos-en` 已部署
- ⚠️ 需要配置DNS记录以连接域名到Vercel部署

## 需要配置的DNS记录

### 方案1：使用A记录（推荐）
在您的域名注册商（如阿里云、腾讯云等）的DNS管理面板中添加以下记录：

```
类型: A
名称: @
值: 76.76.21.21
TTL: 3600

类型: CNAME  
名称: www
值: cname.vercel-dns.com
TTL: 3600
```

### 方案2：使用CNAME记录
```
类型: CNAME
名称: @
值: cname.vercel-dns.com
TTL: 3600

类型: CNAME
名称: www  
值: cname.vercel-dns.com
TTL: 3600
```

## 当前Vercel部署信息
- **项目名称**: autobusinessos-en
- **生产URL**: https://autobusinessos-en.vercel.app
- **项目ID**: prj_GjidvDFfD427qOx2EM15Fr9KDCoF

## 验证步骤
1. 配置DNS记录后，等待DNS传播（通常需要几分钟到几小时）
2. 访问 https://www.autobusinessos.com 验证是否正常工作
3. 访问 https://autobusinessos.com 验证是否正常工作

## 故障排除
如果配置后仍然显示404：
1. 检查DNS记录是否正确添加
2. 等待DNS传播完成
3. 清除浏览器缓存
4. 使用 `nslookup autobusinessos.com` 检查DNS解析

## 联系支持
如果遇到问题，可以：
1. 检查Vercel控制台中的域名配置
2. 联系域名注册商的技术支持
3. 查看Vercel的域名配置文档
