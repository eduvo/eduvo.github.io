---
layout: post
title:  Shadow in text
tagline: because flat design is not mandatory
tags: sass css
author: oliver
---
We can use inset in the box-shadow property, but not in text-shadow.
So we can trick this by using this following style (sass-flavor).

{% highlight sass %}
$bgcolor: sameasbackgroundcolor
.text
  color: rgba(#b5bc67, 0.8)
  text-shadow: 1px 3px 3px $bgcolor, 0 0 0 #000, 1px 3px 3px $bgcolor
  &::selection
    background: #5af
    text-shadow: none
    color: #fff
{% endhighlight %}

The first and last `1px 3px 3px $bgcolor` control the shadow range, and I add a selection style to avoid it looks weird when select this text.

Live demo:

<p data-height="150" data-theme-id="0" data-slug-hash="mHwfL" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/mHwfL/'>mHwfL</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

_oliver_
