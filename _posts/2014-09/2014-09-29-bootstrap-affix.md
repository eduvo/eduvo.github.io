---
layout: post
title: Bootstrap affix
tagline: smoother with a wrapper
tags: css javascript
category: oliver
author: oliver
date: 2014-09-29 14:00
---
I found a better way to use the bootstrap affix style or any other js library providing effect like this.

The bootstrap documentation is on:

- <http://getbootstrap.com/javascript/#affix>

We can easy to set the target distance. When user scroll the page down and reach the target distance the affix event would be triggered and class attribute is changed too.

So we use the class to switch the style. Usually usage is fixed the main menu to window with setting CSS position property to absolute or fixed. But if we directly change original element’s position to absolute or fixed the whole page would reduce the element’s height. The scroll action is not smooth and it doesn't feels good. Just like jump to some where suddenly.

So here provides the better way to handle this kind of interaction design: Keep the height and change the style of element inside.

### Bad Example:

{% highlight sass %}
.header
  height: 60px
  &.affix
    position: fixed
    ...
{% endhighlight %}

Bad Example Demo <http://codepen.io/Oliverl/pen/IvygF>

<p data-height="192" data-theme-id="0" data-slug-hash="IvygF" data-default-tab="result" data-user="Oliverl" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/IvygF/'>IvygF</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


### The Better Way:

{% highlight sass %}
.header-wrapper
  height: 60px
  .header
    height: 60px
  &.affix
    .header
      position: fixed
      ...
{% endhighlight %}

Solution Demo <http://codepen.io/Oliverl/pen/HksKl>

<p data-height="192" data-theme-id="0" data-slug-hash="HksKl" data-default-tab="result" data-user="Oliverl" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/HksKl/'>HksKl</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
