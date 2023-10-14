---
title: TypeScript学习笔记
pubDate: 2023-10-11
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---
> 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

> 而  `void`  类型的变量不能赋值给  `number`  类型的变量：

> TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

> **如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成  `any`  类型而完全不被类型检查**：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```


