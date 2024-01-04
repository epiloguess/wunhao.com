---
title: Vue
pubDate: 2023-10-25
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

[KeepAlive | Vue.js](https://cn.vuejs.org/guide/built-ins/keep-alive.html)

[父组件和子组件之间的生命周期执行顺序\_子组件比父组件先获取参数\_青颜的天空的博客-CSDN 博客](https://blog.csdn.net/a1056244734/article/details/123436200)

### 列表渲染

> Vue 默认按照“就地更新”的策略来更新通过  `v-for`  渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

> 默认模式是高效的，但**只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况**。

> 为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的  `key` attribute：
