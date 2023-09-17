---
title: arr.sort
pubDate: 2023-09-16
description: ""
categories:
  - JavaScript
tags:
  - 数组方法
featured: false
draft: false
---

### 示例

```js
let arr = [ 1, 2, 15 ];

// 该方法重新排列 arr 的内容
arr.sort();

alert( arr );  // 1, 15, 2
```

### 返回值

返回排序后的数组，会改变原数组

> 默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。

> 如果想要不改变原数组的排序方法，可以使用  [`toSorted()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)。

### 参数

可以传入一个比较函数

> `arr.sort(fn)`  方法实现了通用的排序算法。我们不需要关心它的内部工作原理（大多数情况下都是经过  [快速排序](https://en.wikipedia.org/wiki/Quicksort)  或  [Timsort](https://en.wikipedia.org/wiki/Timsort)  算法优化的）。

> 实际上，比较函数只需要返回一个正数表示“大于”，一个负数表示“小于”。

```js
arr.sort( (a, b) => a - b );
```

| `compareFn(a, b)`  返回值 | 排序顺序                       |
| ------------------------- | ------------------------------ |
| > 0                       | `a`  在  `b`  后，如  `[b, a]` |
| < 0                       | `a`  在  `b`  前，如  `[a, b]` |
| === 0                     | 保持  `a`  和  `b`  原来的顺序 |

可以通过 `return b -a` 实现 [[arr.reverse]]

---

[[数组方法]]
