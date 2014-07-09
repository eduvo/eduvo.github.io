---
layout: post
title: Mute cache
tagline: in rails logs
tags: rails
category: aaronk
date: 2014-07-09 21:30
---
By Default, Rails.cache will write log when updating cache.
But if we don't want it to log all those records, we can use shut it up, by enclosing code with a `Rails.cache.mute` :

{% highlight ruby %}
Rails.cache.mute do
  Rails.cache.write("FOO", 'bar')
end
{% endhighlight %}

Very easy!

