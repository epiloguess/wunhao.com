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

- src
  - assets >> 存放项目有关的，需要在 `.astro` 文件中导入的，经过处理的文件
  - components >> Astro 组件
  - content
    - docs >> 博客 Markdown 文件，由 Obsidian 管理
      - assets >> Obsidain 附件文件夹
      - blog >> 博客本身相关的 Markdown 文件
    - meta >> 博客相关的 json 文件
  - layouts >> Astro 布局
  - pages >> Astro 页面
- public >> 存放项目所需的，不需要经过处理的文件

### Obsidian 配置

#### 设置-选项-文件与链接

- 始终更新内部链接
  - 开启
- 新建笔记的存放位置
  - 选择**指定的附件文件夹**，路径参考`/todo`
- 内部链接类型
  - 选择 **基于当前笔记的相对路径**
- 使用 Wiki 链接
  - 关闭
- 附件默认存放路径
  - 选择 **指定的附件文件夹**，路径参考`/assets`

#### 第三方插件配置

- Paste image rename

  从外部复制图片到 Obsidian 中，文件名中默认包含空格，而 Astro 暂不支持在 Markdown 中导入文件名中包含空格或者转义字符的图片，所以需要此插件自动修改文件名

  - 配置 `Pattern` 第一个选项，配置参考`{{DATE:x}}`
  - 开启 `Auto rename`
