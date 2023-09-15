---
title: Object.getOwnPropertyNames和Object.keys
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

> There is a little difference. `Object.getOwnPropertyNames(a)` returns *all* own properties of the object `a`. `Object.keys(a)` returns all *enumerable* own properties. It means that if you define your object properties without making some of them `enumerable: false` these two methods will give you the same result.  
> 有一点不同。 `Object.getOwnPropertyNames(a)`  返回对象  `a`  的所有自己的属性。 `Object.keys(a)`  返回所有可枚举的自有属性。这意味着，如果您定义对象属性而不将其中一些属性设置为  `enumerable: false` ，这两种方法将为您提供相同的结果。

> Another difference is in case of array `Object.getOwnPropertyNames` method will return an extra property that is `length`.

因为数组的长度是数组本身的属性，并且是不可枚举的

[[Object.keys和for...in]]

### 参考资料

[javascript - Object.getOwnPropertyNames vs Object.keys - Stack Overflow](https://stackoverflow.com/questions/22658488/object-getownpropertynames-vs-object-keys)

---

[[对象方法]]
