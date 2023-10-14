---
title: Object.hasOwn和Object.prototype.hasOwnProperty
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

[javascript - Object.hasOwn() vs Object.prototype.hasOwnProperty() - Stack Overflow](https://stackoverflow.com/questions/69561596/object-hasown-vs-object-prototype-hasownproperty)

> It is recommended to this method use over the `Object.hasOwnProperty()` because it also works for objects created by using `Object.create(null)` and for objects that have overridden the inherited `hasOwnProperty()` method. Although it's possible to solve these kind of problems by calling `Object.prototype.hasOwnProperty.call(<object reference>, <property name>)` on an external object, `Object.hasOwn()` overcome these problems, hence is preferred (see examples below)

> 建议使用此方法而不是  `Object.hasOwnProperty()` ，因为它也适用于使用  `Object.create(null)`  创建的对象以及覆盖继承的  `hasOwnProperty()`  方法的对象。虽然可以通过在外部对象上调用  `Object.prototype.hasOwnProperty.call(<object reference>, <property name>)`  来解决此类问题，但  `Object.hasOwn()`  克服了这些问题，因此是首选（请参见下面的示例）
