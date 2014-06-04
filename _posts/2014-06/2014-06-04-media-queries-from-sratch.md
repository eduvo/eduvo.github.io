---
layout: post
title:  Media queries from scratch
tagline: because small is beautiful
tags: sass mobile css
category: naiting
date: 2014-06-04 12:00
---
This is a small snippets set for media queries, if you don't want to learn/use a framework like sussy or breakpoint, you may like this

{% highlight sass %}
body
  background: red
  +tablet
    background: green
  +desktop
    background: blue
{% endhighlight %}

mixin below

{% highlight sass %}
$mobile: 480px
$tablet: 1024px

=min( $min )
  @media (min-width: $min + 1)
    @content

=max( $max )
  @media (max-width: $max)
    @content

=between( $min, $max )
  @media (min-width: $min + 1) and (max-width: $max)
    @content

=mq($device)
  @if $device == mobile // 0 ~ $mobile
    +max($mobile)
      @content
  @else if $device == desktop // $tablet ~ ∞
    +min($tablet)
      @content
  @else if $device == not-mobile // $mobile ~ ∞
    +min($mobile)
      @content
  @else if $device == tablet // $mobile ~ $tablet
    +between($mobile, $tablet)
      @content

// create your own aliases
=tablet
  +mq(tablet)
    @content
=desktop
  +mq(desktop)
    @content
=mobile
  +mq(mobile)
    @content
=not-mobile
  +mq(not-mobile)
    @content
{% endhighlight %}
