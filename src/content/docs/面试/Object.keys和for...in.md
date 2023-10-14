---
title: Object.keys和for...in
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

> `Object.keys()` returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon `object`. This is the same as iterating with a [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop, except that a `for...in` loop enumerates properties in the prototype chain as well. The order of the array returned by `Object.keys()` is the same as that provided by a [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop.
> `Object.keys()`  返回一个数组，其元素是与直接在  `object`  上找到的可枚举字符串键控属性名称相对应的字符串。这与使用  `for...in`  循环进行迭代相同，只不过  `for...in`  循环也会枚举原型链中的属性。 `Object.keys()`  返回的数组顺序与  `for...in`  循环提供的顺序相同。

### 参考

- [Object.keys() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
