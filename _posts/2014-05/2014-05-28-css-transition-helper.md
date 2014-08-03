---
layout: post
title:  CSS Transition helper
tagline: for sass with compass
tags: sass compass
category: naiting
date: 2014-05-28 18:25
author: naiting
---
This is a component from an old project from mine, it's a switcher, very small but have lots of transition.Transition is easy, but there are some details like:

Different durations
{% highlight sass %}
a
  +transition( background .5s, color .5s, text-indent 1s, letter-spacing 1s )
{% endhighlight %}

Different delay
{% highlight sass %}
a
  +transition( background .5s, color .3s .5s, font-size .5s .8s )
{% endhighlight %}

And, sometimes you may like it all delay .5s only when mouseout
{% highlight sass %}
a
  +transition( color .5s .5s, background 1s .5s )
  &:hover
    +transition( color .5s, background 1s )
{% endhighlight %}

Thanks to compass, it can be simpler
{% highlight sass %}
$delay: .5s
a
  +transition( color .5s, background 1s )
  +transition-delay( $delay )
  &:hover
    +transition( color .5s, background 1s )
{% endhighlight %}

<p data-height="223" data-theme-id="0" data-slug-hash="ymDls" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/sliiice/pen/ymDls/'>ymDls</a> by naiting (<a href='http://codepen.io/sliiice'>@sliiice</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
