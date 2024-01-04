---
title: vite
pubDate: 2023-10-24
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

> Vite 以  [原生 ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)  方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。

> Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据  `304 Not Modified`  进行协商缓存，而依赖模块请求则会通过  `Cache-Control: max-age=31536000,immutable`  进行强缓存，因此一旦被缓存它们将不需要再次请求。

### 参考

- [为什么选 Vite | Vite 官方中文文档](https://cn.vitejs.dev/guide/why.html)
