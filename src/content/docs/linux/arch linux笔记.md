---
title: arch linux笔记
pubDate: 2023-09-15
description: ""
categories:
  - default
tags:
  - default
featured: false
draft: true
---
#### 安装 archlinux

```bash
rfkill

rfkill unblock all
```

#### 调整网络 iwd

```
iwctl

device show

station wlan0 scan

station wlan0 connect SSID

station wlan0 show

```

#### 硬盘分区与格式化

```bash
cfdisk
```

```
pacman -Syy
```

#### 添加 Grub 引导

```
grub-mkconfig > /boot/grub/grub.cfg

grub-instll --target=x86_64-efi --efi-directory=/boot

```

#### 可选-配置多显示器

```
yay -S arandr
```

#### 配置 bashrc 别名

`alias`

#### 可选-配置 dwm 



#### 配置网络

[参考](http://t.zoukankan.com/cirry-p-arch-install-step-two.html)

##### 关闭 iwd

```bash
## 如果没有安装iwd就忽略前两条命令
sudo systemctl disable iwd
#确保iwd开机处于关闭状态，其无线连接会与NetworkManager冲突
sudo systemctl stop iwd
#同上，立即关闭
```

##### 启用 NetworkManager

```bash
iwd 
sudo systemctl enable --now NetworkManager
#确保先启动NetworkManager，并进行网络连接 若iwd已经与NetworkManager冲突 则执行完上一步重启一下电脑即可。
```


#### pacman相关

##### 更换 pacman 源

[archlinux](https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/)

[archlinuxcn](https://mirrors.tuna.tsinghua.edu.cn/help/archlinuxcn/)

##### 安装 yay

需要先安装 community 源，直接从 aur 编译会失败

```bash
sudo pacman -S yay
```

#### 常用的工具软件

##### 配置 kde 
###### 文件管理器
```
sudo pacman -S [dolphin]
```

##### ssh

```
sudo pacman -S wget openssh
```


##### vscode

[参考](<https://wiki.archlinux.org/title/Visual_Studio_Code_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

微软官方版本

```bsah
yay -S visual-studio-code-bin
```

开源版本（不可登录账号）

```bash
sudo pacman -S code
```

##### 中文输入法

[参考](https://www.modb.pro/db/113512)

fcitx

```bash
pacman -Qsq fcitx
```

[fcitx5](https://www.cnblogs.com/Likfees/p/15656828.html)

```bash
sudo pacman -S fcitx5-im fcitx5-chinese-addons fcitx5-pinyin-zhwiki
```

可能还需要 `kcm-fcitx5`

##### qq qq 音乐

```bash
yay -S linuxqq qqmusic-bin
```

##### clash 代理



- [参考 1](https://codeswift.top/posts/clash-linux/#%E5%88%A9%E7%94%A8-export-%E5%91%BD%E4%BB%A4%E4%BD%BF%E7%94%A8%E4%BB%A3%E7%90%86)
- [参考 2](https://zhuanlan.zhihu.com/p/396272999)

[clash地址](https://api1.testdns123.xyz/sub?target=clash&url=https%3A%2F%2Fdav201.xyz%2Fmodules%2Fservers%2FUnlimitedSocks%2Fsubscribeios.php%3Fsid%3D13718%26token%3DFsG65z8waLf6&list=false&udp=false)

##### ntfs 挂载

[参考](https://www.cnblogs.com/awakenedy/p/9699113.html)

```bash
sudo pacman -S ntfs-3g
```

##### 不推荐-配置 kde discovery

[参考](https://www.cnblogs.com/dxrh/p/13252330.html)

```bash
pacman -Si discover
```

#### 系统驱动完善
##### 触摸板

[参考](https://www.jianshu.com/p/c5678ce41ab1)

#### 电源管理tlp

```
pacman -S tlp

systemctl mask systemd-rfkill.service

systemctl mask systemd-rfkill.socket

systemctl enable tlp.service

systemctl start tlp.service

yay -S tlpui-git
```
#### wine

[参考](https://blog.csdn.net/SHIGUANGTUJING/article/details/89291732)

#### 数据库

[mysql](https://wiki.archlinux.org/title/MariaDB)

```bash
pacman -S mariadb

yay -S mycli

```



---

[[Linux]]
