---
layout: post
title:  Bundle open
tagline: and read the source of the gems directly
tags: rubygems ruby
category: ilake
author: ilake
date: 2014-06-11 12:12
---
Here are a couple of bundle commands I use very often:

### bundle show

`bundle show jekyll` displays where the gem `jekyll` is, then I can grep there easily, or use it in a one-line:

{% highlight bash %}
grep -r "weird message" `bundle show jekyll`
{% endhighlight %}

### bundle open

`bundle open jekyll` could directly open the `jekyll` gem dir with your `$EDITOR`, pretty useful to figure out how a gem really works under the hood.
