---
layout: post
title: Pretty json
tagline: on the commandline
tags: console
category: mose
author: mose
date: 2014-09-10 07:00
---
JSON prettifying is a reccurent topic, every coder needs it to keep some sanity. My way to do it has been something like this for a while:

{% highlight ruby %}
ruby -rjson -ropen-uri -rawesome_print -e "ap JSON.load(open('http://jsonip.com/'))"
{% endhighlight %}

{% highlight ruby %}
{
       "ip" => "59.115.120.166",
    "about" => "/about",
     "Pro!" => "http://getjsonip.com"
}
{% endhighlight %}

because when you are rubyist everything can be solve with ruby, obviously.

But well, then one day I did

    pip install pjson

and then

{% highlight ruby %}
curl -s http://jsonip.com | pjson
{% endhighlight %}
{% highlight json %}
{
  "Pro!": "http://getjsonip.com",
  "about": "/about",
  "ip": "59.115.120.166"
}
{% endhighlight %}

Faster, easier, happier.
