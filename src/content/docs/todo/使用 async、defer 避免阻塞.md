---
title: 使用 async、defer 避免阻塞
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---
[脚本：async，defer](https://zh.javascript.info/script-async-defer)

> `defer`  特性告诉浏览器不要等待脚本。相反，浏览器将继续处理 HTML，构建 DOM。脚本会“在后台”下载，然后等 DOM 构建完成后，脚本才会执行。

> - 具有  `defer`  特性的脚本不会阻塞页面。
> - 具有  `defer`  特性的脚本总是要等到 DOM 解析完毕，但在  `DOMContentLoaded`  事件之前执行。

---

[[前端性能优化]]
