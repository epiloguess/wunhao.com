---
title: call和apply
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---
[装饰器模式和转发，call/apply](https://zh.javascript.info/call-apply-decorators)

> `call`  和  `apply`  之间唯一的语法区别是，`call`  期望一个参数列表，而  `apply`  期望一个包含这些参数的类数组对象。

### call()

### apply()

#### 使用场景

使用扩展运算符替代 apply()方法

```js
// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);
```

---

[[func.call]]
[[func.apply]]
[[函数方法]]
