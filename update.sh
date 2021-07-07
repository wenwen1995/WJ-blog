#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的目录文件夹
cd /dist

# 复制dist文件夹下的所有文件
cp /dist/*

# 切换到已有的分支
git checkout gh-pages

# 粘贴刚刚复制的dist文件夹的所有内容到此
cp /dist/*

# 提交生成的信息，并进行部署
git add .
git commit -m 'deploy'
git push origin gh-pages

