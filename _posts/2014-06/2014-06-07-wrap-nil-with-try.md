---
layout: post
title:  Wrap nil with try
tagline: and avoid errors
tags: ruby
category: roman
date: 2014-06-07 01:03
---
Here comes the tip from Roman, very small and probably obvious, but if you do not know about this method, it will be a nice little thing to keep in mind. When trying to call a method on a possibly nil object, we use try:

{% highlight ruby %}
    some_object.try(:some_method)
{% endhighlight %}

But what if you need to pass the arguments to this method? Well, it can be done with the second argument to try method:

{% highlight ruby %}
    some_object.try(:some_method, some_args)
{% endhighlight %}

This can be used when trying to fetch an element of a potential array:

{% highlight ruby %}
    arr = [10, 20, 30]
    arr.try(:at, 1) => 20
{% endhighlight %}

Note that `try([1])` is wrong, you should use `:at`.
