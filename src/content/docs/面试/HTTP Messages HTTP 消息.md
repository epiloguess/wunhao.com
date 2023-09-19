---
title: HTTP Messages HTTP 消息
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

> HTTP messages are how data is exchanged between a server and a client. There are two types of messages: *requests* sent by the client to trigger an action on the server, and *responses*, the answer from the server.  
> HTTP 消息是服务器和客户端之间交换数据的方式。有两种类型的消息：客户端发送的请求，以触发服务器上的操作，以及响应，即来自服务器的答复。

> HTTP 消息（如 HTTP/1.1 及更早版本中定义）是人类可读的。在 HTTP/2 中，这些消息被嵌入到二进制结构（帧）中，从而允许进行标头压缩和多路复用等优化。即使在此版本的 HTTP 中仅发送原始 HTTP 消息的一部分，每个消息的语义也不会改变，并且客户端会（实际上）重新构造原始 HTTP/1.1 请求。因此，理解 HTTP/1.1 格式的 HTTP/2 消息很有用。

> HTTP/2 引入了一个额外的步骤：它将 HTTP/1.x 消息划分为嵌入流中的帧。数据和标头帧是分开的，这允许标头压缩。

### 参考

- [HTTP Messages - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
-

---

[[HTTP]]
