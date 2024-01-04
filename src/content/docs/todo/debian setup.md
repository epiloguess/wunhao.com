---
title: debian setup
pubDate: 2023-12-23
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: false
aliases:
  - debian setup
---

### Gnome

#### Dock

[Dash to Dock - GNOME Shell Extensions](https://extensions.gnome.org/extension/307/dash-to-dock/)

#### 分数缩放

Gnome 默认只支持整数缩放，100%，200%，300%。

对于 2K 屏幕的笔记本来说，150%的缩放比较合适

```bash
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

##### 缺点

运行在 xwayland 上的应用会变模糊

#### Tweaks

##### 右上角最大化最小化按钮

`Tweaks——Window Titlebars——Titlebar Buttons`

开启 `Maximize` 和 `Minimize`

#### Gnome-software

##### 禁用开机启动相关服务

```bash
sudo nano /etc/xdg/autostart/org.gnome.Software.desktop
```

添加 `Hidden=true`

参考 [XDG Autostart - ArchWiki](https://wiki.archlinux.org/title/XDG_Autostart)

#### Evolution

```bash
sudo apt autopurge evolution-data-server
```

### Wayland

#### Firefox

[在 Linux 中安装 Firefox | Firefox 帮助](https://support.mozilla.org/zh-CN/kb/linux-firefox)

Firefox 从 121 版本开始支持 wayland,自带的 Firefox-ESR 暂不支持

#### Electron 相关

Electron 相关软件在运行时传递以下命令行参数可以强制 wayland,对版本号有要求，且 Fcitx5 暂不可用

[Fcitx5 - ArchWiki](https://wiki.archlinux.org/title/Fcitx5#Fcitx5_not_available_in_Chromium_running_on_Wayland)

`--enable-features=UseOzonePlatform --ozone-platform=wayland `

##### VSCode Insiders

[Download Visual Studio Code Insiders](https://code.visualstudio.com/insiders/)

VsCode 正式版暂`截止2023-12-23`无法开启 Wayland,需要 Insiders 版本
