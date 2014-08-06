---
layout: post
title: prevendDefault after load
tagline: requires delegation
tags: javascript
category: naiting
author: naiting
date: 2014-08-06 13:00
---
Recently I searched `preventDefault()` in a whole project, I found some of them like

{% highlight coffeescript %}
$('.a-btn').on 'click', (event) ->
  event.preventDefault()
  # blahblahblah..
$('.another-btn').on 'click', (event) ->
  event.preventDefault()
  # blahblahblah..
{% endhighlight %}

I guess you are using `a` links in a non default way. But we better bind it globally in the DOM, and delegate it to `body` because if the dom element is created after page load that may not work properly.

{% highlight coffeescript %}
$('body').on 'click', 'a[href="#"]', (e) ->
  e.preventDefault()
{% endhighlight %}
