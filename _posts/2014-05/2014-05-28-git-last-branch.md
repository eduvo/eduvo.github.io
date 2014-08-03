---
layout: post
title:  Git last branch
tagline: a trick to type less
tags: git console
category: aaronh
date: 2014-05-28 18:55
author: aaronh
---
Here is a small trick for git. The dash (or hyphen) `-` is an alias for the last branch used.

You can use it to save time like this:

{% highlight bash %}
$[develop] git checkout release
$[release] git merge - # Will merge develop to release branch
$[release] git checkout - # Checkout to develop
$[develop]
{% endhighlight %}


