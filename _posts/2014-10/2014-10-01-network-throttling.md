---
layout: post
title: Network throttling
tagline: with trickle
tags: devops networking
category: anna
author: anna
date: 2014-10-01 19:30
---
Have you ever thought about how to limit bandwidth per a process the
similar way “nice” is doing for limiting CPU usage?

There is a nice utility that can do exactly what you need. It is
called [trickle][1]. It helps you to limit upload and download
bandwidth for a process.

For example, if you run:

    trickle -u 10 ncftp

Trickle will run ncftp and limit its download capacity to 10kB/s.
Option -d here means “download”.

If you need to limit upload capacity, just pass -u option to trickle:

    trickle -d 10 -u 20 ncftp

In this case trickle limits ncftp’s both upload and download capacity.

Here is a real example of how trickle limits download bandwidth. Let’s
run wget without trickle:

    wget -O /dev/null http://speedtest.wdc01.softlayer.com/downloads/test10.zip
    --2014-10-01 08:19:13--
    http://speedtest.wdc01.softlayer.com/downloads/test10.zip
    Resolving speedtest.wdc01.softlayer.com
    (speedtest.wdc01.softlayer.com)... 208.43.102.250
    Connecting to speedtest.wdc01.softlayer.com
    (speedtest.wdc01.softlayer.com)|208.43.102.250|:80... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 11536384 (11M) [application/zip]
    Saving to: `/dev/null'

    100%[================================================================>]
    11,536,384  9.89M/s   in 1.1s

As you can see, we got 9.89M/s without any bandwidth limitations.

Lets’ run the same command with trickle and see what happens:

    trickle -d 20 wget -O /dev/null http://speedtest.wdc01.softlayer.com/downloads/test10.zip
    trickle: Could not reach trickled, working independently: No such file or directory
    --2014-10-01 08:19:32--
    http://speedtest.wdc01.softlayer.com/downloads/test10.zip
    Resolving speedtest.wdc01.softlayer.com
    (speedtest.wdc01.softlayer.com)... 208.43.102.250
    Connecting to speedtest.wdc01.softlayer.com
    (speedtest.wdc01.softlayer.com)|208.43.102.250|:80... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 11536384 (11M) [application/zip]
    Saving to: `/dev/null'

    100%[================================================================>]
    11,536,384  20.3K/s   in 9m 1s

Trickle successfully limited download bandwidth to ~20 KB/s

trickle can be installed on linux using yum or apt-get, just run:

    yum install trickle
    # or
    apt-get install trickle

*(note, on mac, it doesn't seem to compile well, you may have to use [throttled][2] rather)*

[1]: http://monkey.org/~marius/pages/?page=trickle
[2]: https://github.com/zquestz/throttled
