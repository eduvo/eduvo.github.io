---
layout: post
title: Explain shell
tagline: to reach enlightenment
tags: console
category: aaronh
author: aaronh
date: 2014-09-11 12:00
---
As a developer, programmer, devops or whatever, you are faced to some "magic" shell command from time to time.

Generally, you will want to know what the hell to do of the commands (or you can just paste and run it like if you trust it, but it very dangerous).

So let me show you a website named http://explainshell.com/. It can help you to understand a complicated shell command quickly.

If you got a complicated, weird, TL;DR shell command, and want to understand what the heck it's doing, like this one

{% highlight bash %}
find . -maxdepth 1 -printf "%TB %f\n" | while read -r month file ; do mv -v "$file"
{% endhighlight %}

Just paste it to explainshell and you will get a clear ui for all explanation of combined command, like on the attached screenshot.

![explainshell](/assets/images/2014-09-11-explainshell.png)
