---
title: git基础使用
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

```shell
git config user.name

git config user.email
```

`init`

```shell
#初始化本地目录为git仓库
git init
```

`status`

```shell
#查看状况，前面有红色`??`的表示没有跟踪
git status -s
```

`add`

```shell
#添加到暂存区
git add .
```

`commit`

```shell
#提交
git commit -m ''
#省去提交到暂存区的步骤
git commit -a -m ''
```

`remote`

```shell
#添加远程仓库
git remote add origin target
#远程仓库名称
git remote show
```

`push`

```shell
#将本地分支推送到远程仓库，第一次推送需要加上`-u`
git push -u origin "master"
#删除远程仓库指定分支
git push 远程仓库 --delete 远程分支
```

`branch`

```shell
#查看当前分支，带`*`表示当前所处分支
git branch
#创建新的分支
git branch newbranch
#删除本地分支
git branch -d 本地分支
```

`checkout`

```shell
#切换到新的分支
git checkout newbranch
#快速创建分支并切换分支
git checkout -b newbranch
```

`merge`

```shell
#合并分支，需要先切换回主分支
git merge master
```

`pull`

```shell
git pull
```

---

[git](../面试/git.md)
