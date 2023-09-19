---
title: CSS选择器优先级
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---
- 1.内联样式，如`style="color: green"`，权值为`1000`
- 2.ID 选择器，如`#app`，权值为`0100`
- 3.类、伪类、属性选择器，如`.foo, :first-child, div[class="foo"]`，权值为`0010`
- 4.标签、伪元素选择器，如`div::first-line`，权值为`0001`
- 5.通配符、子类选择器、兄弟选择器，如`*, >, +`，权值为`0000`
- 6.继承的样式没有权值

---

[[CSS 选择器]]
