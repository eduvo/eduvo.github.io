---
layout: post
title: History expansion
tagline: on the commandline
tags: console
category: ming
author: ming
date: 2014-09-12 19:00
---

The exclamation mark ( ! ) has almost been forgot by people who prefer to use arrow keys in their shell (either C Shell, bash, or zsh). Is that possible to be more productive when you use these history expansions? Yeah, YES and NO. But here I'm gonna list out some are really useful.

There are many history expansion features, but at least this one is useful. The `!!`.

`!!` is a shortcut for you to re-display the last command you issued. For example,

    ~$ echo "Testing"
    Testing
    ------------------------------------------------------------
    ~$ !!
    ------------------------------------------------------------
    ~$ echo "Testing"
    Testing

But is that faster than Up/Enter? No, but when you need to put something prefix to the previous command, YES. For example, adding `sudo` before that command is the case.

    ~$ apt-get install tree
    E: Could not open lock file /var/lib/dpkg/lock - open (13: Permission denied)
    E: Unable to lock the administration directory (/var/lib/dpkg/), are you root?
    ------------------------------------------------------------
    ~$ sudo !!
    sudo apt-get install tree
    Reading package lists... Done
    Building dependency tree
    Reading state information... Done
    tree is already the newest version.
    0 upgraded, 0 newly installed, 0 to remove and 12 not upgraded.

You can use this to repeat a command over and over again. It turns out to be very handy when you need to build a pipeline like this,

    ~$ netstat -rn
    Kernel IP routing table
    Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
    0.0.0.0         10.0.2.2        0.0.0.0         UG        0 0          0 eth0
    10.0.0.0        0.0.0.0         255.255.255.0   U         0 0          0 eth1
    10.0.2.0        0.0.0.0         255.255.255.0   U         0 0          0 eth0
    172.17.0.0      0.0.0.0         255.255.0.0     U         0 0          0 docker0
    ------------------------------------------------------------
    ~$ !! | grep eth0
    netstat -rn | grep eth0
    0.0.0.0         10.0.2.2        0.0.0.0         UG        0 0          0 eth0
    10.0.2.0        0.0.0.0         255.255.255.0   U         0 0          0 eth0

Not only we can use `!!`, there are some other ways to use !, such as,

- You can repeat a command in history, which starts with a specific string, such as `!string`. (It not has to be the last command been issued, only ever been issued in history. If there are more than one, you still also can use the arrow keys Up/Down to select them.)

    ~$ !e
    ------------------------------------------------------------
    ~$ echo "Testing"
    Testing

- Or if you know the number of that command in history, just type `!20`, for example.

    ~$ history | grep Testing
     6704* echo "Testing"
    ------------------------------------------------------------
    ~$ !6704
    ------------------------------------------------------------
    ~$ echo "Testing"
    Testing

It's pretty much enough, in other cases, I will use arrow keys with tab as well. Happy Coding!
