---
title: Astro 建站小记
pubDate: 2023-09-17
description: ""
categories:
  - default
tags:
  - default
featured: true
draft: false
---

### 目录结构

#### `src/content/assets`

目录用于统一存放博客推文所需的资源，例如图片等等

**注意**：文件名不能包括空格，参考[导入 🚀 Astro 文档](https://docs.astro.build/zh-cn/guides/imports/)

要和 `public` 和 `src/assets` 目录区分开

前者是用于存放项目所需的，不需要经过处理的文件，

后者是用于项目有关的，在 `.astro` 文件中导入的，需要经过处理的文件

#### `src/content/docs`

目录用于存放所有博客推文

#### `src/content/blog`

目录用于存放与博客本身有关系的文档

#### `src/content/template`


