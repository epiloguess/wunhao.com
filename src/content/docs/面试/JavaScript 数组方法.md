---
title: JavaScript 数组方法
pubDate: 2023-09-15
tags:
  - JavaScript
  - 数组
featured: false
draft: true
---

### 数组方法比较

同样适用于在 react 中使用数组方法的注意事项
![[../assets/Pasted image 20230818110425.png]]

---

[[Array]]

### 区别和联系

- forEach 返回 `undefined`
- map 返回新数组

主要有三点

foreach 会跳过空元素
foreach 的 this 是从外部上下文确定的，最好还是搭配箭头函数用
foreach 不能用于 async

### 如何中断

- `return`
- `try...catch`

---

[[arr.map]]
[[arr.foreach]]
