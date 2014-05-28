---
layout: post
title:  jQuery serialize
tagline: "not just for forms, also for fields"
tags: mac devtool
category: aaronk
---
AaronK just met a little jQuery problem and googled the answer. We already know jQuery provide a easy method to serialize all the input elements became a parameter string, such as

{% highlight javascript %}
    $('#new_post_form').serialize()
{% endhighlight %}

But what if we want to just serialize partial input elements inside some div (or non-form element). Then we can just use

{% highlight javascript %}
    $('#div input').serialize()
{% endhighlight %}
