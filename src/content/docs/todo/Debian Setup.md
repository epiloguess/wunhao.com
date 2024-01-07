---
title: Debian Setup
pubDate: 2023-12-20
description: ""
categories:
  - default
tags:
  - Linux
  - Debian
featured: false
draft: false
aliases:
---

### 镜像源

[debian | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/debian/)

### Gnome

#### Dock

[Dash to Dock - GNOME Shell Extensions](https://extensions.gnome.org/extension/307/dash-to-dock/)

#### 分数缩放

Gnome 默认只支持整数缩放，100%，200%，300%

启用分数缩放, 运行在 xwayland 上的应用会变模糊

```bash
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

#### 最大化最小化按钮

- `Tweaks——Window Titlebars——Titlebar Buttons`
  - 开启 `Maximize` 和 `Minimize`

#### 禁用/删除相关服务

##### Gnome-software

```bash
sudo nano /etc/xdg/autostart/org.gnome.Software.desktop
```

添加 `Hidden=true`

参考 [XDG Autostart - ArchWiki](https://wiki.archlinux.org/title/XDG_Autostart)

##### Evolution

```bash
sudo apt autopurge evolution-data-server
```

### Wayland

#### Firefox

[在 Linux 中安装 Firefox | Firefox 帮助](https://support.mozilla.org/zh-CN/kb/linux-firefox)

Firefox 从 121 版本开始支持 wayland,自带的 Firefox-ESR 暂不支持

#### Fcitx5

Fcitx5 暂不可用

[Fcitx5 - ArchWiki](https://wiki.archlinux.org/title/Fcitx5#Fcitx5_not_available_in_Chromium_running_on_Wayland)

#### Chromium-Based

`Chromium-Based` 相关软件在运行时传递以下命令行参数可以指定 wayland,对版本号有要求

```bash
--enable-features=UseOzonePlatform --ozone-platform=wayland
```

- VsCode

VsCode 正式版暂`截止2023-12-23`无法开启 Wayland,需要 Insiders 版本

[Download Visual Studio Code Insiders](https://code.visualstudio.com/insiders/)
