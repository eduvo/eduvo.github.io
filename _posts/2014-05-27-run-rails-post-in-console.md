---
layout: post
title:  Run rails post in console
tagline: for debug or restoring data
tags: pry rails
category: johnny
---
Today I learn a trick to mimic a webhook in console.

Before when I want to test out why the webhook send to OA is not working I have to actually trigger the webhook in other app, like KB. Moreover, it is sometimes hard to make the params identical with the original request.

We can solve this by using the console and the `app` object:

{% highlight ruby %}
  rails c
  Loading development environment (Rails 4.1.1)
  [1] pry(main)> params = { something: "somewhere" }
  [2] pry(main)> url = '/some/path'
  [3] pry(main)> app.post(url, params)
{% endhighlight %}

First I dig through the production log to get the `params` of the webhook. Then I issue `app.post` and that's it! The app get a identical webhook as the log show. No more clicking UI!

_johnny_
