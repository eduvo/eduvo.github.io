---
layout: post
title:  Left marginal
tagline: for css positionning
tags: css frontend
category: roman
date: 2014-06-26 13:10
---
In this short tip from Roman, we will see the simple but useful CSS Pattern called Left Marginal. It helps to position an item to the left of the main content and is handy when styling additional headers etc.

The code is quite short:

{% highlight haml %}
%h1 Main Header
  %div.left-marginal
    %h2.marginal-heading Left Heading
    Main Content
{% endhighlight %}

CSS:
{% highlight css %}
.left-marginal {
  position: relative;
  margin-left: 100px;
}
.marginal-heading {
  position: absolute;
  left: -100px;
  top: 0;
  margin: 0;
}
{% endhighlight %}

This code puts Left Heading into the margin of the main content div. The idea is trivial, but tricky to guess, so, using it knowledgeably would improve the application style.

----

*addendum from Oliver*

I think using `{position:absolute}` is not good enough in this case. This may cause the overlap issue and It also killed the flexibility of the layout.

We can use the following pattern to solve these problems.

{% highlight html %}
<div class="wrapper">
  <div class="left-block">Left Heading</div>
  <div class="container">Main Content</div>
</div>
{% endhighlight %}

{% highlight sass %}
.wrapper
  .left-block
    float: left
    width: 50px/* optional */
    text-wrap: normal
    word-wrap: break-word
  .container
    overflow: hidden
{% endhighlight %}

LIVE DEMO:

<p data-height="157" data-theme-id="0" data-slug-hash="tmizL" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/mose/pen/tmizL/'>tmizL</a> by Mose (<a href='http://codepen.io/mose'>@mose</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
