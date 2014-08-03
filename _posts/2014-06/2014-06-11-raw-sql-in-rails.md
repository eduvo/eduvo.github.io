---
layout: post
title:  Raw SQL in Rails
tagline: for faster db manipulation
tags: rails activerecord
category: johnny
author: johnny
date: 2014-06-11 11:55
---
Using ActiveRecord to query and update is easy but sometimes not so efficient. If the ERD relationship is complicated sometimes it take a lot of time to get the information, or to perform the change you actually need.

In such situation, we can use raw SQL in migration to speed up the process. Such as, for example:

{% highlight ruby %}
def change
  execute <--SQL
    update status=0 from users where id in (select user_id from groups where archived=1)
  SQL
end
{% endhighlight %}

Sometimes the improvement can be amazing, worth a try! (speed is usually more than 3 times faster)

