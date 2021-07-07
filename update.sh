#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件,最终在项目根目录下，生成dist文件夹(很多内容)
npm run build

#提交当前master分支的记录
git add .
git commit -m 'master内容更新'
git push origin master

# 这里为避免切换错误，删除 .idea/目录
# 从master分支切换到已有的分支gh-pages
rm -rf  .idea/
git checkout gh-pages

# copy master分支下的dist文件到当前分支gh-pages下
git checkout master -- dist/


# 循环将 dist文件夹的里的所有内容粘贴到gh-pages分支，当前项目的根目录上（因为最终网站访问的就是项目文件下的index.html）
cp -r dist/* ./


# 在gh-pages提交生成的信息，并进行部署
git add .
git commit -m 'deploy'
git push origin gh-pages


# 完成结束后，再切回主分支，进行编辑
# 这里为避免切换错误，删除 .idea/目录
rm -rf  .idea/
git checkout master


