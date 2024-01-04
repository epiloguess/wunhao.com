---
title: JavaScript风格指南及思考
pubDate: 2023-11-01
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
aliases:
  - JavaScript风格指南及思考
---
> 15.1 使用  `===`  和  `!==`  而不是  `==`  和  `!=` 。eslint: `eqeqeq`

> [15.2](https://github.com/airbnb/javascript#comparison--if) Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:  
> 15.2 条件语句（例如  `if`  语句）使用  `ToBoolean`  抽象方法的强制转换来评估其表达式，并始终遵循以下简单规则：

> [15.5](https://github.com/airbnb/javascript#comparison--switch-blocks) Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`). eslint: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)  
> 15.5 使用大括号在  `case`  和  `default`  子句中创建包含词法声明的块（例如  `let` 、 `const` 、 `function` ）。 eslint: `no-case-declarations`

> Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.  
> 为什么？词法声明在整个  `switch`  块中可见，但仅在分配时才进行初始化，这仅在到达其  `case`  时发生。当多个  `case`  子句尝试定义相同的内容时，这会导致问题。

```js
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
const quux = a != null ? a : b;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
const quux = a ?? b;
```

> [15.9](https://github.com/airbnb/javascript#nullish-coalescing-operator) The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`. Otherwise, it returns the left-hand side operand.  
> 15.9 空合并运算符 ( `??` ) 是一个逻辑运算符，当其左侧操作数为  `null`  或  `undefined`  时，它返回其右侧操作数。否则，它返回左侧操作数。

> Why? It provides precision by distinguishing null/undefined from other falsy values, enhancing code clarity and predictability.  
> 为什么？它通过区分 null/undefined 与其他虚假值来提供精度，从而增强代码清晰度和可预测性。

```
// bad
const value = 0 ?? 'default';
// returns 0, not 'default'

// bad
const value = '' ?? 'default';
// returns '', not 'default'

// good
const value = null ?? 'default';
// returns 'default'

// good
const user = {
  name: 'John',
  age: null
};
const age = user.age ?? 18;
// returns 18
```

```js
// => this.reviewScore = 9;

// bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore);


```


