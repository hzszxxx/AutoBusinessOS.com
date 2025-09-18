#!/bin/bash

echo "🚀 AutoBusinessOS.com 部署检查"
echo "=============================="

# 检查构建文件
echo "📦 检查构建文件..."
if [ -d "out" ]; then
    echo "✅ out/ 目录存在"
    echo "📊 构建统计:"
    echo "   - HTML文件: $(find out -name "*.html" | wc -l) 个"
    echo "   - 总大小: $(du -sh out/ | cut -f1)"
else
    echo "❌ out/ 目录不存在，请先运行 npm run build"
    exit 1
fi

# 检查关键文件
echo "🔍 检查关键文件..."
key_files=("out/index.html" "out/sitemap.xml" "out/robots.txt")
for file in "${key_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file 存在"
    else
        echo "❌ $file 缺失"
    fi
done

# 检查页面完整性
echo "📄 检查页面完整性..."
required_pages=(
    "out/index.html"
    "out/tools/roi-calculator/index.html"
    "out/solutions/marketing-automation/index.html"
    "out/industries/ecommerce/index.html"
    "out/resources/index.html"
)

for page in "${required_pages[@]}"; do
    if [ -f "$page" ]; then
        echo "✅ $(basename $(dirname $page))/$(basename $page)"
    else
        echo "❌ 缺失: $page"
    fi
done

echo ""
echo "🎯 部署准备状态:"
if [ -d "out" ] && [ -f "out/index.html" ]; then
    echo "✅ 网站已准备好部署！"
    echo ""
    echo "📋 下一步:"
    echo "1. 上传 out/ 目录到您的托管服务"
    echo "2. 配置域名和SSL"
    echo "3. 设置环境变量（GA和Google Ads ID）"
    echo "4. 验证网站功能"
else
    echo "❌ 网站还未准备好，请检查构建错误"
fi