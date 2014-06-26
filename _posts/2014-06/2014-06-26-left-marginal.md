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
