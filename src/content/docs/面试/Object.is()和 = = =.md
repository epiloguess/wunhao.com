---
title: Object.is()和 = = =
pubDate: 2023-06-18
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: false
---

> 1. `Object.is()`  方法对于一些特殊的值比较更准确：

- 对于 NaN 和 NaN 的比较，`Object.is(NaN, NaN)`  返回  `true`，而  `NaN === NaN`  返回  `false`。

- 对于 +0 和 -0 的比较，`Object.is(+0, -0)`  返回  `false`，而  `+0 === -0`  返回  `true`。



### 参考

- [Object.is() 与比较操作符 “===”、“==” 有什么区别【热度: 1,425】 · Issue #434 · pro-collection/interview-question · GitHub](https://github.com/pro-collection/interview-question/issues/434)
