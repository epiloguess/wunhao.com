---
title: isFinite()
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---
> When the argument to the `isFinite()` function is not of type [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type), the value is first coerced to a number, and the resulting value is then compared against `NaN` and ±Infinity. This is as confusing as the behavior of [`isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) — for example, `isFinite("1")` is `true`.  
> 当  `isFinite()`  函数的参数不是 Number 类型时，该值首先被强制转换为数字，然后将结果值与  `NaN`  和 ±Infinity 进行比较。这与  `isNaN`  的行为一样令人困惑 - 例如， `isFinite("1")`  是  `true` 。

> [[Number.isFinite]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) is a more reliable way to test whether a value is a finite number value, because it returns `false` for any non-number input.  
> `Number.isFinite()`  是测试某个值是否为有限数值的更可靠方法，因为它对于任何非数字输入都会返回  `false` 。
