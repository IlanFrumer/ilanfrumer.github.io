title: Sublime text 3 build 3059 upgrade
date: 2013-12-22 10:00:00
tags:
- Linux
- Sublime Text
---

Last week a new build ([3059](http://www.sublimetext.com/blog/articles/sublime-text-3-build-3059)) of sublime text 3 was released.

After only one day it was available through the ["WebUpd8 PPA"](https://launchpad.net/~webupd8team/+archive/sublime-text-3).

But trying to upgrade (`apt-get upgrade`) was not working as I expected.
I even tried to remove it and reinstall it but nothing helped.

So after a quick research I found out that `apt-cache policy` prints out detailed information about the priority selection of a named package.

```sh
apt-cache policy sublime-text-installer

sublime-text-installer:
  Installed: 3047-2~webupd8~2
  Candidate: 3047-2~webupd8~2
  Version table:
     3059-2~webupd8~0 0
        500 http://ppa.launchpad.net/webupd8team/sublime-text-3/ubuntu/ raring/main amd64 Packages
 *** 3047-2~webupd8~2 0
        700 http://free.nchc.org.tw/linuxmint/packages/ olivia/import amd64 Packages
        100 /var/lib/dpkg/status
```

As you can see, the older build resolved to be the install candidate because it has higher priority (700) than the new one (500).

So, to force apt-get updating sublime I had to explicitly specify the new version.
```sh
sudo apt-get install sublime-text-installer=3059-2~webupd8~0
subl -v
Sublime Text Build 3059
```