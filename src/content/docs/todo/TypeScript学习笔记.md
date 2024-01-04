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
aliases:
  - ts
---

### void, undefined, null

> 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

> 而  `void`  类型的变量不能赋值给  `number`  类型的变量：

### 类型推论

> TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

> **如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成  `any`  类型而完全不被类型检查**：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

### 类型别名和接口

> Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an `interface` are available in `type`, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.  
> 类型别名和接口非常相似，在许多情况下您可以在它们之间自由选择。 `interface`  的几乎所有功能都可以在  `type`  中使用，主要区别在于类型无法重新打开以添加新属性，而接口始终是可扩展的。

### 类型断言

> Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to `any` (or `unknown`, which we’ll introduce later), then to the desired type:  
> 有时，此规则可能过于保守，并且不允许可能有效的更复杂的强制。如果发生这种情况，您可以使用两个断言，首先是  `any` （或  `unknown` ，我们将在稍后介绍），然后是所需的类型：

```ts
const a = expr as any as T;
```

### Type Gymnastics

### 属性修饰符

#### readonly

> It’s important to manage expectations of what `readonly` implies. It’s useful to signal intent during development time for TypeScript on how an object should be used. TypeScript doesn’t factor in whether properties on two types are `readonly` when checking whether those types are compatible, so `readonly` properties can also change via aliasing.  
> 管理对 `readonly` 含义的期望非常重要。在 TypeScript 开发期间发出有关如何使用对象的意图非常有用。在检查两种类型是否兼容时，TypeScript 不会考虑两种类型的属性是否为 `readonly` ，因此 `readonly` 属性也可以通过别名进行更改。
