---
layout: post
title:  Shell interactive filtering
tagline: with peco
tags: console git
category: aaronh
date: 2014-06-27 22:40
---
First, you should install peco: <https://github.com/peco/peco>. It provide a simple interactive filtering interface in shell.

Here an exemple of usage: we can easily integrate peco into git checkout command when you want quickly search and checkout a branch.

Add a alias in you `.gitconfig`

{% highlight bash %}
[alias]
  coi = "!`git checkout $(git branch | peco)`"
{% endhighlight %}

then you can use like

{% highlight bash %}
git coi
{% endhighlight %}

to quickly search and checkout branch in interactive way.
