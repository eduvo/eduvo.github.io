---
layout: post
title:  Array literals
tagline: and interpolation
tags: ruby
category: johnny
date: 2014-06-26 02:59
---
When declaring an array of string, rather than declaring it literally as:

{% highlight ruby %}
["apple", "orange"]
{% endhighlight %}

We can do it as:

{% highlight ruby %}
%w(apple orange)
{% endhighlight %}

This saves typing the quote and comma. This is pretty well known.

What may be less known is that there is a difference between using `%w()` and `%W()`. The big one enables interpolation. For example

{% highlight ruby %}
%w( #{1+1} )  #=> [ "\#{1+1}" ]
%W( #{1+1} )  #=> [ "2" ]
{% endhighlight %}

Also, we know ruby don't have character as variable type, it has only string. But you can declare a one character long string by using

{% highlight ruby %}
?z  #=> "z"
{% endhighlight %}

This is sometimes useful in `case` statements (and saves one keystroke, woohoo).

