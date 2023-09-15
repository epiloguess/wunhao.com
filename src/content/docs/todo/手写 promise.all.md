---
title: 手写 promise.all
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: false
---
```js
function myPromiseAll(iterable) {
    return new Promise((resolve,reject) => {
        const promises = Array.from(iterable);
        // 定义Promise对象resolve的数组
        const result = [];
        // 定义一个计数器用来判断是否所有的promise执行完毕
        let count = 0;
        // 并发执行每一个promise
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                result[i] = res;
                count++;
                if (count === promises.length) {
                    resolve(result);
                }
            }).catch(err => reject(err))
        }
    })
}

```

---

[[Promise.all]]