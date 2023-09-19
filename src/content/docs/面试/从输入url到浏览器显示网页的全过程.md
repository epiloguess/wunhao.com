---
title: 从输入url到浏览器显示网页的全过程
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

1. **用户输入 URL**：

   - 用户在浏览器的地址栏中输入要访问的网站的 URL（统一资源定位符）。
   - 例如，用户可能输入"[www.example.com"作为 URL。](http://www.example.xn--com%22url-lp6nv3h./)

2. **DNS 解析**：

   - 浏览器首先需要将输入的域名（例如，[www.example.com）解析为 IP 地址，以便找到服务器。](http://www.example.xn--com%29ip%2C-i73kx3ckxdp0k0mbg91a3tc4gq91o4gqcfcc13z./)
   - 浏览器会向本地 DNS 缓存或操作系统的 DNS 解析器发出 DNS 查询请求。

3. **DNS 查询**：

   - 如果本地 DNS 缓存中没有找到域名对应的 IP 地址，那么本地 DNS 缓存会向根 DNS 服务器发出查询请求。
   - 根 DNS 服务器会返回顶级域名（例如.com、.org 等）的 DNS 服务器的 IP 地址。

4. **递归 DNS 查询**：

   - 本地 DNS 缓存将继续向下一级的 DNS 服务器发出查询请求，直到找到目标域名的 IP 地址。
   - 这个过程是递归的，每个 DNS 服务器都负责查询下一级的 DNS 服务器，直到最终找到 IP 地址。

5. **建立 TCP 连接**：

   - 一旦浏览器获得了目标服务器的 IP 地址，它会使用 HTTP 或 HTTPS 协议与服务器建立 TCP 连接。
   - 对于 HTTPS，还包括 SSL/TLS 握手来建立安全连接。

6. **发起 HTTP 请求**：

   - 浏览器向目标服务器发送 HTTP 请求，该请求包括要访问的资源（例如，网页的路径和文件名）以及其他头部信息。

7. **服务器处理请求**：

   - 服务器接收到 HTTP 请求后，会根据请求的内容和服务器上的配置来处理请求。
   - 这可能涉及到从数据库检索数据、执行服务器端脚本等操作。

8. **服务器发送 HTTP 响应**：

   - 服务器根据请求生成 HTTP 响应，其中包含了网页的 HTML 内容和其他可能的资源，如 CSS、JavaScript、图像等。
   - 响应也包括 HTTP 响应头部信息，用于指示响应的性质（成功、失败、重定向等）和其他元数据。

9. **接收响应数据**：

   - 浏览器接收到来自服务器的 HTTP 响应数据。

10. **渲染网页**：

    - 浏览器解析 HTML 内容，构建 DOM（文档对象模型）树。
    - 浏览器根据 CSS 样式信息对页面进行渲染，构建渲染树。
    - 浏览器执行 JavaScript 代码来处理网页的交互和动态行为。
    - 最终，浏览器将渲染树中的内容显示在用户的屏幕上，呈现出完整的网页。

11. **完成加载**：

    - 浏览器显示完整的网页内容，用户可以与网页进行交互。

### 参考

[How browsers work](https://web.dev/howbrowserswork/#preface)

---

[浏览器渲染](浏览器渲染)
