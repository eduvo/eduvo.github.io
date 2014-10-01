---
layout: post
title: Retina fonts
tagline: smoother with css media query
tags: css sass
category: naiting
author: naiting
date: 2014-09-29 16:00
---
when using multi-weights fonts family (e.g. Source Sans) in a site, the hairline maybe looks good in retina display but blur in the normal one. so my solution is setting different weights for normal and retina.

Like this:

{% highlight sass %}
$font-weights: lighter, normal, bold, ultra
$font-weight-map: 300, 400, 600, 700
$font-weight-map-retina: 200, 400, 600, 900
{% endhighlight %}

And a little media-query:

{% highlight sass %}
=mq-retina
  @media screen and (-webkit-min-device-pixel-ratio: 2), (-o-min-device-pixel-ratio: 2/1), (min--moz-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution:192dpi), (min-resolution:2dppx)
    @content
{% endhighlight %}

And the mixin for font-weight:

{% highlight sass %}
=font-weight($weight)
  $index: index($font-weights, $weight)
  $weight: nth($font-weight-map, $index)
  $weight-retina: nth($font-weight-map-retina, $index)
  font-weight: $weight
  +mq-retina
    font-weight: $weight-retina
{% endhighlight %}

Then, you can use it in your project like:

{% highlight sass %}
.lighter
  +font-weight(lighter)
.normal
  +font-weight(normal)
.bold
  +font-weight(bold)
.ultra
  +font-weight(ultra)
{% endhighlight %}

:smile:

<p data-height="250" data-theme-id="0" data-slug-hash="DtECx" data-default-tab="result" data-user="sliiice" class='codepen'>See the Pen <a href='http://codepen.io/sliiice/pen/DtECx/'>Retina-Specific Font Weight</a> by naiting (<a href='http://codepen.io/sliiice'>@sliiice</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

*ps: also you can store the setting in a map if you use sass 3.3+*
