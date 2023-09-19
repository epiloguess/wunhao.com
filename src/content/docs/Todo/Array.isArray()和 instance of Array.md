---
title: Array.isArray()和 instance of Array
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

> `Array.isArray()` checks if the passed value is an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). It does not check the value's prototype chain, nor does it rely on the `Array` constructor it is attached to. It returns `true` for any value that was created using the array literal syntax or the `Array` constructor. This makes it safe to use with cross-realm objects, where the identity of the `Array` constructor is different and would therefore cause [`instanceof Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) to fail.  
> `Array.isArray()`  检查传递的值是否为  `Array` 。它不检查值的原型链，也不依赖于它所附加的  `Array`  构造函数。对于使用数组文字语法或  `Array`  构造函数创建的任何值，它都会返回  `true` 。这使得它可以安全地用于跨领域对象，其中  `Array`  构造函数的标识不同，因此会导致  `instanceof Array`  失败。

> `Array.isArray()` also rejects objects with `Array.prototype` in its prototype chain but aren't actual arrays, which `instanceof Array` would accept.  
> `Array.isArray()`  还拒绝其原型链中带有  `Array.prototype`  的对象，但这些对象不是  `instanceof Array`  会接受的实际数组。

### 参考资料

- [Array.isArray() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [ECMAScript® 2023 Language Specification](https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-isarray)
