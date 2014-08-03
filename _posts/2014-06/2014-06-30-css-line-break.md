---
layout: post
title:  CSS line break
tagline: even inside tables
tags: css
category: oliver
author: oliver
date: 2014-06-30 20:40
---
For line break in css, the basic usage is as following:

{% highlight sass %}
.type-a
  text-wrap: normal
  word-wrap: break-word
{% endhighlight %}

But this does not work inside tables. If we want this to work in tables we must apply `{table-layout: fixed }` to the table. If we don’t want to use fixed table layout the only solution is:

{% highlight sass %}
.type-b
  word-break: break-all // for IE, FF
  word-break: break-word // for chrome
{% endhighlight %}

`{word-break: break-all}` is not really pretty in IE and Firefox but it still works.

So in the normal case we can use `.type-a` but use `.type-b` to the elements in table.

live demo:

<p data-height="306" data-theme-id="0" data-slug-hash="wynrC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/wynrC/'>wynrC</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
