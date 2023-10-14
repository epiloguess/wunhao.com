---
title: CORS-safelisted request header
pubDate: 2023-09-17
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

> `Simple header` is Old term for [CORS-safelisted request header](https://developer.mozilla.org/en-US/docs/Glossary/CORS-safelisted_request_header).

> A [CORS-safelisted request header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) is one of the following [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers):  
> CORS 安全列表请求标头是以下 HTTP 标头之一：

- [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept),
- [`Accept-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language),
- [`Content-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language),
- [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type),
- [`Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range).

> When containing only these headers (and values that meet the additional requirements laid out below), a request doesn't need to send a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) in the context of [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS).  
> 当仅包含这些标头（以及满足下面列出的附加要求的值）时，请求不需要在 CORS 上下文中发送预检请求。

### 参考

- [CORS-safelisted request header - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/CORS-safelisted_request_header)
