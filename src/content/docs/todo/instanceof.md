---
title: instanceof
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---
> `instanceof`  操作符用于检查一个对象是否属于某个特定的 class。同时，它还考虑了继承。

### 检测机制

基于原型的检测机制

- 如果这儿有静态方法  `Symbol.hasInstance`，那就直接调用这个方法：
- 大多数 class 没有  `Symbol.hasInstance`。在这种情况下，标准的逻辑是：使用  `obj instanceOf Class`  检查  `Class.prototype`  是否等于  `obj`  的原型链中的原型之一。

---

[[Javascript操作符]]
