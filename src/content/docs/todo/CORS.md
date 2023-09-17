---
title: CORS
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

### CORS

> `Access-Control-Max-Age`  给出了在不发送另一个预检请求的情况下可以缓存对预检请求的响应的时间（以秒为单位）的值。默认值为 5 秒。

> 尽管第 10 行包含针对  `https://bar.other`  上的内容的 Cookie，但如果 bar.other 未使用  `Access-Control-Allow-Credentials` `: true`  进行响应（第 16 行），则响应将为会被忽略并且不会提供给 Web 内容。

> 如果响应中的  `Access-Control-Allow-Origin`  值是“ `*` ”通配符而不是实际来源，则响应中的任何  `Set-Cookie`  响应标头都不会设置 cookie 。

### 参考

- [Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

[[跨域]]
