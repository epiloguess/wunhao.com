---
title: Powershell使用代理
pubDate: 2023-09-13
description: 配置Powershell代理
author: 文浩
categories:
  - Windows
tags:
  - 代理
  - Powershell
popular: true
draft: "true"
---

[配置 Powershell 命令行代理 | anuoua 的](https://anuoua.github.io/2019/08/11/%E9%85%8D%E7%BD%AEPowershell%E5%91%BD%E4%BB%A4%E8%A1%8C%E4%BB%A3%E7%90%86/)

```powershell
code $profile
```

```bash
function setproxy {
	Set-Item Env:http_proxy "http://127.0.0.1:1080"  # 代理地址
	Set-Item Env:https_proxy "http://127.0.0.1:1080" # 代理地址
}

function unsetproxy {
    Remove-Item Env:http_proxy
    Remove-Item Env:https_proxy
}
```

---
