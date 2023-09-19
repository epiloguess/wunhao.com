---
title: async 和 defer
pubDate: 2023-09-15
description: ""
categories:
  - 浏览器
tags:
  - 浏览器脚本
featured: false
draft: true
---

> 具有  `defer`  特性的脚本总是要等到 DOM 解析完毕，但在  `DOMContentLoaded`  事件之前执行。

> `async`  脚本会在后台加载，并在加载就绪时运行。DOM 和其他脚本不会等待它们，它们也不会等待其它的东西。`async`  脚本就是一个会在加载完成时执行的完全独立的脚本。

> `async`  特性仅适用于外部脚本
> 就像  `defer`  一样，如果  `<script>`  标签没有  `src`  特性（attribute），那么  `async`  特性会被忽略。

---

[[浏览器 脚本]]
