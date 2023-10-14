---
title: animation和transition
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

### animations

### transition

transition 过渡

> **CSS transitions** provide a way to control animation speed when changing CSS properties.
>
> > CSS 过渡提供了一种在更改 CSS 属性时控制动画速度的方法。

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

### 区别

[CSS animation 与 CSS transition 有何区别？ - 知乎](https://www.zhihu.com/question/19749045)

> - CSS 的`transition`只有两个状态：**开始状态** 和 **结束状态**；但`animation`可能是多个状态，有帧的概念
> - CSS 的`transition`需要借助别的方式来触发，比如 CSS 的状态选择器（如`:hover`）或 借助 JavaScript 来触发；`animation`可以自动触发

---

[[transition]]
[[animation]]
