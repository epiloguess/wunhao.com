---
title: Astro 建站小记
pubDate: 2023-09-17
description: ""
categories:
  - default
tags:
  - SSG
  - Astro
  - 前端框架
featured: true
draft: false
---

### 目录结构

`src/content/assets`

用于统一存放博客推文所需的资源，例如图片等等

**注意**

要和 `public` 和 `src/assets` 目录区分开

前者是用于存放项目所需的，不需要经过处理的文件，

后者是用于项目有关的，在 `.astro` 文件中导入的，需要经过处理的文件

`src/content/docs`

用于存放所有博客推文

`src/content/blog`

用于存放与博客本身有关系的文档

`src/content/template`

### Obsidian 配置

#### 设置-选项-文件与链接

- 始终更新内部链接
  - 开启
- 新建笔记的存放位置
  - 选择**指定的附件文件夹**，路径参考`src/content/docs/Todo`
- 内部链接类型
  - 选择 **基于当前笔记的相对路径**
- 使用 Wiki 链接
  - 关闭
- 附件默认存放路径
  - 选择 **指定的附件文件夹**，路径参考`src/content/assets`

#### 第三方插件配置

- Obsidian Git
  - 大部分托管网站都支持根据 Git 的 Commit 自动构建和发布，该插件可以在更新文档后，自动 Commit 和 Push 到远程 Git 仓库，实现全过程自动化
- Paste image rename
  - 配置 `Pattern` 第一个选项，配置参考`{{DATE:x}}`
  - 开启 `Auto rename`
  - 从外部复制图片到 Obsidian 中，文件名中默认包含空格，而 Astro 暂不支持在 Markdown 中导入文件名中包含空格或者转义字符的图片，所以需要此插件自动修改文件名


