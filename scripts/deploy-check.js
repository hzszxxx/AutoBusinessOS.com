#!/usr/bin/env node

/**
 * AutoBusinessOS 部署检查脚本
 * 检查部署状态、环境变量、性能指标等
 */

const https = require('https');
const { execSync } = require('child_process');

// 配置
const CONFIG = {
  productionUrl: 'https://autobusinessos-fp4npk5cf-coleneplattebcg94-6808s-projects.vercel.app',
  expectedPages: [
    '/',
    '/solutions/marketing-automation',
    '/solutions/sales-automation',
    '/tools/roi-calculator',
    '/resources/guides',
    '/industries/ecommerce'
  ],
  performanceThresholds: {
    maxLoadTime: 3000, // 3秒
    maxLCP: 2500, // 2.5秒
    maxFID: 100, // 100ms
    maxCLS: 0.1 // 0.1
  }
};

// 颜色输出
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title) {
  console.log('\n' + '='.repeat(50));
  log(`🔍 ${title}`, 'bold');
  console.log('='.repeat(50));
}

// 检查页面可访问性
async function checkPageAccessibility(url) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    https.get(url, (res) => {
      const loadTime = Date.now() - startTime;
      resolve({
        status: res.statusCode,
        loadTime,
        success: res.statusCode === 200
      });
    }).on('error', (err) => {
      resolve({
        status: 0,
        loadTime: Date.now() - startTime,
        success: false,
        error: err.message
      });
    });
  });
}

// 检查所有页面
async function checkAllPages() {
  logSection('页面可访问性检查');
  
  const results = [];
  
  for (const page of CONFIG.expectedPages) {
    const url = `${CONFIG.productionUrl}${page}`;
    log(`检查页面: ${page}`, 'blue');
    
    const result = await checkPageAccessibility(url);
    results.push({ page, url, ...result });
    
    if (result.success) {
      log(`  ✅ 状态: ${result.status}, 加载时间: ${result.loadTime}ms`, 'green');
    } else {
      log(`  ❌ 状态: ${result.status}, 错误: ${result.error || '未知错误'}`, 'red');
    }
  }
  
  return results;
}

// 检查环境变量
function checkEnvironmentVariables() {
  logSection('环境变量检查');
  
  const requiredVars = [
    'NEXT_PUBLIC_GA_MEASUREMENT_ID',
    'NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID',
    'SITE_URL'
  ];
  
  log('注意: 环境变量需要在Vercel Dashboard中配置', 'yellow');
  log('请访问: https://vercel.com/coleneplattebcg94-6808s-projects/autobusinessos/settings', 'blue');
  
  requiredVars.forEach(varName => {
    log(`  📋 ${varName}: 需要在Vercel中设置`, 'yellow');
  });
}

// 检查构建状态
function checkBuildStatus() {
  logSection('构建状态检查');
  
  try {
    // 检查out目录是否存在
    const fs = require('fs');
    if (fs.existsSync('./out')) {
      log('  ✅ 静态文件已生成 (out目录存在)', 'green');
      
      // 检查关键文件
      const keyFiles = ['index.html', 'sitemap.xml', 'robots.txt'];
      keyFiles.forEach(file => {
        if (fs.existsSync(`./out/${file}`)) {
          log(`  ✅ ${file} 存在`, 'green');
        } else {
          log(`  ❌ ${file} 缺失`, 'red');
        }
      });
    } else {
      log('  ❌ 静态文件未生成，请运行 npm run build', 'red');
    }
  } catch (error) {
    log(`  ❌ 检查构建状态时出错: ${error.message}`, 'red');
  }
}

// 检查性能指标
async function checkPerformance() {
  logSection('性能检查');
  
  try {
    // 使用Lighthouse CLI检查性能（如果可用）
    try {
      execSync('lighthouse --version', { stdio: 'pipe' });
      log('  📊 运行Lighthouse性能检查...', 'blue');
      
      const lighthouseResult = execSync(
        `lighthouse ${CONFIG.productionUrl} --output=json --quiet`,
        { encoding: 'utf8' }
      );
      
      const report = JSON.parse(lighthouseResult);
      const metrics = report.lhr.audits;
      
      // 检查关键指标
      const lcp = metrics['largest-contentful-paint']?.numericValue;
      const fid = metrics['max-potential-fid']?.numericValue;
      const cls = metrics['cumulative-layout-shift']?.numericValue;
      
      if (lcp) {
        const status = lcp <= CONFIG.performanceThresholds.maxLCP ? '✅' : '⚠️';
        log(`  ${status} LCP: ${Math.round(lcp)}ms (阈值: ${CONFIG.performanceThresholds.maxLCP}ms)`, 
            lcp <= CONFIG.performanceThresholds.maxLCP ? 'green' : 'yellow');
      }
      
      if (fid) {
        const status = fid <= CONFIG.performanceThresholds.maxFID ? '✅' : '⚠️';
        log(`  ${status} FID: ${Math.round(fid)}ms (阈值: ${CONFIG.performanceThresholds.maxFID}ms)`, 
            fid <= CONFIG.performanceThresholds.maxFID ? 'green' : 'yellow');
      }
      
      if (cls) {
        const status = cls <= CONFIG.performanceThresholds.maxCLS ? '✅' : '⚠️';
        log(`  ${status} CLS: ${cls.toFixed(3)} (阈值: ${CONFIG.performanceThresholds.maxCLS})`, 
            cls <= CONFIG.performanceThresholds.maxCLS ? 'green' : 'yellow');
      }
      
    } catch (error) {
      log('  ℹ️  Lighthouse未安装，跳过详细性能检查', 'yellow');
      log('  安装命令: npm install -g lighthouse', 'blue');
    }
    
  } catch (error) {
    log(`  ❌ 性能检查失败: ${error.message}`, 'red');
  }
}

// 生成部署报告
function generateReport(pageResults) {
  logSection('部署报告');
  
  const totalPages = pageResults.length;
  const successfulPages = pageResults.filter(r => r.success).length;
  const failedPages = totalPages - successfulPages;
  
  log(`📊 页面检查结果:`, 'bold');
  log(`  ✅ 成功: ${successfulPages}/${totalPages}`, successfulPages === totalPages ? 'green' : 'yellow');
  
  if (failedPages > 0) {
    log(`  ❌ 失败: ${failedPages}/${totalPages}`, 'red');
    pageResults.filter(r => !r.success).forEach(result => {
      log(`    - ${result.page}: ${result.error || 'HTTP ' + result.status}`, 'red');
    });
  }
  
  const avgLoadTime = pageResults.reduce((sum, r) => sum + r.loadTime, 0) / totalPages;
  log(`  ⏱️  平均加载时间: ${Math.round(avgLoadTime)}ms`, avgLoadTime < 2000 ? 'green' : 'yellow');
  
  // 建议
  log('\n📋 建议操作:', 'bold');
  if (failedPages === 0) {
    log('  🎉 所有页面检查通过！', 'green');
  } else {
    log('  🔧 请检查失败的页面并重新部署', 'yellow');
  }
  
  log('  🌐 配置自定义域名: autobusinessos.com', 'blue');
  log('  📊 设置环境变量 (Google Analytics, Google Ads)', 'blue');
  log('  📈 启用Vercel Analytics监控', 'blue');
}

// 主函数
async function main() {
  log('🚀 AutoBusinessOS 部署检查开始', 'bold');
  log(`检查URL: ${CONFIG.productionUrl}`, 'blue');
  
  try {
    // 检查构建状态
    checkBuildStatus();
    
    // 检查环境变量
    checkEnvironmentVariables();
    
    // 检查页面可访问性
    const pageResults = await checkAllPages();
    
    // 检查性能
    await checkPerformance();
    
    // 生成报告
    generateReport(pageResults);
    
    log('\n✨ 部署检查完成！', 'bold');
    
  } catch (error) {
    log(`❌ 检查过程中出现错误: ${error.message}`, 'red');
    process.exit(1);
  }
}

// 运行检查
if (require.main === module) {
  main();
}

module.exports = {
  checkPageAccessibility,
  checkAllPages,
  checkEnvironmentVariables,
  checkBuildStatus,
  checkPerformance,
  generateReport
};
