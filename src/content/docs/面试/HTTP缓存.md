---
title: HTTP缓存
pubDate: 2023-10-25
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

#### `no-cache` 和 `no-store`

#### no-cache

> However, that usage of `max-age=0` is a remnant of the fact that many implementations prior to HTTP/1.1 were unable to handle the `no-cache` directive — and so to deal with that limitation, `max-age=0` was used as a workaround.  
> 然而， `max-age=0`  的使用是 HTTP/1.1 之前的许多实现无法处理  `no-cache`  指令这一事实的残余 - 因此为了处理该限制， `max-age=0`  被用作解决方法。

> The `no-cache` directive does not prevent the storing of responses but instead prevents the reuse of responses without revalidation.  
> `no-cache`  指令不会阻止存储响应，而是阻止在不重新验证的情况下重复使用响应。

#### no-store

> If you don't want a response stored in any cache, use `no-store`.  
> 如果您不希望将响应存储在任何缓存中，请使用  `no-store` 。

> You may think adding `no-store` would be the right way to opt-out of caching.  
> 您可能认为添加  `no-store`  是选择退出缓存的正确方法。

> However, it's not recommended to grant `no-store` liberally, because you lose many advantages that HTTP and browsers have, including the browser's back/forward cache.  
> 但是，不建议随意授予  `no-store` ，因为你会失去 HTTP 和浏览器所具有的许多优势，包括浏览器的后退/前进缓存。

> Therefore, to get the advantages of the full feature set of the web platform, prefer the use of `no-cache` in combination with `private`.  
> 因此，要获得 Web 平台完整功能集的优势，最好将  `no-cache`  与  `private`  结合使用

---

[[Cache-Control]]
