---
title: WSL
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---

### 修改位置

```powershell
wsl --export Ubuntu D:\ubuntu.tar
wsl --unregister Ubuntu
正在注销...
wsl --import Ubuntu D:\WSL\Ubuntu D:\ubuntu.tar --version 2
```

