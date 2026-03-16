#!/bin/bash
# Vercel CLI 部署脚本

echo "开始部署到 Vercel..."

cd /root/.openclaw/workspace/bridge-studio

# 检查 vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "安装 Vercel CLI..."
    npm i -g vercel
fi

# 登录（交互式）
echo "请登录 Vercel 账号..."
vercel login

# 部署
echo "部署中..."
vercel --prod

echo "部署完成！"
