---
layout: post
title: Activerecords transaction
tagline: to save trouble
tags: activerecord rails
category: johnny
author: johnny
date: 2014-07-10 20:30
---
When you want to make sure a collection of actions take place without issue, you should put them into transaction to make sure none of them has raise a exception.

Lets say John want to buy some ptt-dollar from Jade. Without transaction, it will look something like:

{% highlight ruby %}
John.pay( 100, Jade )
Jade.transfer( 'ptt-$', John )
{% endhighlight %}

But if during paying procedure John don't have any deposit cause rollback, the TRANSFER action still take place. Not good.

So we should wrap it with transaction like:

{% highlight ruby %}
Payment.transaction
  John.pay( 100, Jade )
  Jade.transfer( 'ptt-$', John )
end
{% endhighlight %}

in this case any one of them fail the whole transaction will rollback. Save a lot of trouble :D

