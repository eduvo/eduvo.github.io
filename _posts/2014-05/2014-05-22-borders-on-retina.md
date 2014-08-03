---
layout: post
title:  Borders on retina
tagline: to get the right thickness
tags: css
category: naiting
author: naiting
---
Naiting noticed that on retina display there is something weird with css borders, the 1px border actually shows up like 2px. Here is an easy trick to avoid it:

{% highlight sass %}
    .border-retina
      box-shadow: 0 1px 0px -0.5px red
{% endhighlight %}

see it in action on <http://codepen.io/sliiice/pen/xAqei>
