#!/bin/bash

# AutoBusinessOS 项目备份脚本
# 创建时间: $(date)
# 版本: 1.0

set -e  # 遇到错误立即退出

# 配置
PROJECT_NAME="AutoBusinessOS"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_ROOT="../AutoBusinessOS-Backup"
BACKUP_DIR="$BACKUP_ROOT/$TIMESTAMP"
CURRENT_DIR=$(pwd)

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# 创建备份目录
create_backup_dirs() {
    log "创建备份目录结构..."
    
    mkdir -p "$BACKUP_DIR"/{code,config,docs,deployment,assets}
    mkdir -p "$BACKUP_DIR/code"/{src,public,scripts,out}
    mkdir -p "$BACKUP_DIR/config"/{vercel,env,nginx}
    mkdir -p "$BACKUP_DIR/deployment"/{logs,reports}
    
    log "备份目录创建完成: $BACKUP_DIR"
}

# 备份源代码
backup_source_code() {
    log "备份源代码..."
    
    # 复制源代码（排除node_modules和.git）
    rsync -av --exclude='node_modules' \
              --exclude='.git' \
              --exclude='.next' \
              --exclude='out' \
              --exclude='*.log' \
              --exclude='.vercel' \
              src/ "$BACKUP_DIR/code/src/"
    
    # 复制配置文件
    cp package.json "$BACKUP_DIR/code/"
    cp package-lock.json "$BACKUP_DIR/code/"
    cp next.config.js "$BACKUP_DIR/code/"
    cp next.config.ts "$BACKUP_DIR/code/"
    cp tailwind.config.js "$BACKUP_DIR/code/"
    cp tsconfig.json "$BACKUP_DIR/code/"
    cp eslint.config.mjs "$BACKUP_DIR/code/"
    cp postcss.config.mjs "$BACKUP_DIR/code/"
    
    # 复制脚本
    cp -r scripts/ "$BACKUP_DIR/code/"
    
    # 复制公共资源
    cp -r public/ "$BACKUP_DIR/code/"
    
    # 复制构建输出
    if [ -d "out" ]; then
        cp -r out/ "$BACKUP_DIR/code/"
    fi
    
    log "源代码备份完成"
}

# 备份项目文档
backup_documentation() {
    log "备份项目文档..."
    
    # 复制所有文档文件
    cp *.md "$BACKUP_DIR/docs/" 2>/dev/null || true
    cp -r doc/ "$BACKUP_DIR/docs/" 2>/dev/null || true
    
    log "文档备份完成"
}

# 备份Vercel配置
backup_vercel_config() {
    log "备份Vercel配置..."
    
    # 检查.vercel目录
    if [ -d ".vercel" ]; then
        cp -r .vercel/ "$BACKUP_DIR/config/vercel/"
        log "Vercel配置已备份"
    else
        warn ".vercel目录不存在，跳过Vercel配置备份"
    fi
    
    # 获取Vercel项目信息
    if command -v vercel &> /dev/null; then
        log "获取Vercel项目信息..."
        vercel ls > "$BACKUP_DIR/config/vercel/deployments.txt" 2>/dev/null || true
        vercel inspect > "$BACKUP_DIR/config/vercel/project-info.json" 2>/dev/null || true
    fi
}

# 备份环境配置
backup_environment_config() {
    log "备份环境配置..."
    
    # 创建环境变量模板
    cat > "$BACKUP_DIR/config/env/.env.template" << EOF
# AutoBusinessOS 环境变量配置模板
# 复制此文件为 .env.local 并填入实际值

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Ads
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX

# 网站URL
SITE_URL=https://autobusinessos.com

# 可选配置
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-XXXXXXXXXX
EOF
    
    # 备份现有环境文件（如果存在）
    if [ -f ".env.local" ]; then
        cp .env.local "$BACKUP_DIR/config/env/"
    fi
    
    if [ -f ".env.production" ]; then
        cp .env.production "$BACKUP_DIR/config/env/"
    fi
    
    log "环境配置备份完成"
}

# 备份部署信息
backup_deployment_info() {
    log "备份部署信息..."
    
    # 创建部署信息文件
    cat > "$BACKUP_DIR/deployment/deployment-info.md" << EOF
# AutoBusinessOS 部署信息

## 备份时间
$(date)

## 项目信息
- 项目名称: $PROJECT_NAME
- 备份版本: $TIMESTAMP
- 当前目录: $CURRENT_DIR

## Vercel部署信息
- 生产URL: https://autobusinessos.com
- Vercel项目: coleneplattebcg94-6808s-projects/autobusinessos
- 部署状态: 生产环境已部署

## 域名配置
- 主域名: autobusinessos.com
- SSL证书: 已配置
- DNS: 已指向Vercel

## 环境变量
- Google Analytics: 需要配置
- Google Ads: 需要配置
- 网站URL: https://autobusinessos.com

## 恢复说明
1. 复制代码到新目录
2. 运行 npm install 安装依赖
3. 配置环境变量
4. 运行 npm run build 构建项目
5. 使用 vercel 命令部署到Vercel
EOF

    # 备份package.json信息
    if [ -f "package.json" ]; then
        cp package.json "$BACKUP_DIR/deployment/"
    fi
    
    log "部署信息备份完成"
}

# 创建恢复脚本
create_restore_script() {
    log "创建恢复脚本..."
    
    cat > "$BACKUP_DIR/restore.sh" << 'EOF'
#!/bin/bash

# AutoBusinessOS 项目恢复脚本

echo "🚀 开始恢复 AutoBusinessOS 项目..."

# 检查参数
if [ $# -eq 0 ]; then
    echo "用法: $0 <目标目录>"
    echo "示例: $0 /path/to/new/project"
    exit 1
fi

TARGET_DIR="$1"

# 创建目标目录
mkdir -p "$TARGET_DIR"
cd "$TARGET_DIR"

# 复制代码
echo "📁 复制项目文件..."
cp -r code/* .

# 安装依赖
echo "📦 安装依赖..."
npm install

# 创建环境变量文件
echo "⚙️  创建环境变量模板..."
if [ -f "config/env/.env.template" ]; then
    cp config/env/.env.template .env.local
    echo "✅ 已创建 .env.local 文件，请编辑并填入实际值"
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

echo "✅ 项目恢复完成！"
echo "📋 下一步："
echo "1. 编辑 .env.local 文件，填入环境变量"
echo "2. 运行 'vercel login' 登录Vercel"
echo "3. 运行 'vercel' 部署项目"
EOF

    chmod +x "$BACKUP_DIR/restore.sh"
    log "恢复脚本创建完成"
}

# 创建备份清单
create_backup_manifest() {
    log "创建备份清单..."
    
    cat > "$BACKUP_DIR/BACKUP_MANIFEST.md" << EOF
# AutoBusinessOS 备份清单

## 备份信息
- 备份时间: $(date)
- 备份版本: $TIMESTAMP
- 项目状态: 生产环境已部署

## 备份内容

### 源代码
- ✅ src/ - 源代码目录
- ✅ public/ - 公共资源
- ✅ scripts/ - 脚本文件
- ✅ out/ - 构建输出
- ✅ 配置文件 (package.json, next.config.js, etc.)

### 文档
- ✅ README.md
- ✅ 项目文档 (doc/)
- ✅ 部署指南
- ✅ 环境配置说明

### 配置
- ✅ Vercel配置 (.vercel/)
- ✅ 环境变量模板
- ✅ 部署信息

### 工具
- ✅ restore.sh - 恢复脚本
- ✅ 备份清单

## 恢复步骤
1. 解压备份文件
2. 运行 ./restore.sh <目标目录>
3. 配置环境变量
4. 部署到Vercel

## 注意事项
- 环境变量需要重新配置
- Vercel项目需要重新连接
- 域名配置需要重新设置
EOF

    log "备份清单创建完成"
}

# 压缩备份
compress_backup() {
    log "压缩备份文件..."
    
    cd "$BACKUP_ROOT"
    tar -czf "AutoBusinessOS-backup-$TIMESTAMP.tar.gz" "$TIMESTAMP"
    
    # 计算文件大小
    BACKUP_SIZE=$(du -h "AutoBusinessOS-backup-$TIMESTAMP.tar.gz" | cut -f1)
    log "备份压缩完成，文件大小: $BACKUP_SIZE"
    
    # 创建校验和
    sha256sum "AutoBusinessOS-backup-$TIMESTAMP.tar.gz" > "AutoBusinessOS-backup-$TIMESTAMP.sha256"
    log "校验和文件已创建"
}

# 主函数
main() {
    log "🚀 开始备份 AutoBusinessOS 项目..."
    log "备份目录: $BACKUP_DIR"
    
    # 检查当前目录
    if [ ! -f "package.json" ]; then
        error "请在项目根目录运行此脚本"
    fi
    
    # 执行备份步骤
    create_backup_dirs
    backup_source_code
    backup_documentation
    backup_vercel_config
    backup_environment_config
    backup_deployment_info
    create_restore_script
    create_backup_manifest
    compress_backup
    
    log "✅ 备份完成！"
    log "📁 备份位置: $BACKUP_ROOT/AutoBusinessOS-backup-$TIMESTAMP.tar.gz"
    log "📋 备份清单: $BACKUP_DIR/BACKUP_MANIFEST.md"
    log "🔧 恢复脚本: $BACKUP_DIR/restore.sh"
}

# 运行主函数
main "$@"
