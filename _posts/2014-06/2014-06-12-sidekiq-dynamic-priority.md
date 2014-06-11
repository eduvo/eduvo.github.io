---
layout: post
title:  Sidekiq dynamic priority
tagline: by chosing your queue at runtime
tags: rails sidekiq
category: ihower
date: 2014-06-12 06:05
---
Dynamic Sidekiq priority job

By default sidekiq uses "Queue" to prioritize jobs:
<https://github.com/mperham/sidekiq/wiki/Advanced-Options>
Then you can configure workers to use "high priority" queue.

But can we dynamically decide which queue at runtime?
Instead of `YourWorker.perform_async(arg1, arg2)`,
there's a low-level API that you can use:

{% highlight ruby %}
Sidekiq::Client.push( {
 'class' => YourWorker,
 'queue' => your_queue,
 'args' => [arg1, arg2]
})
{% endhighlight %}

That way you can decide which queue to use, at runtime.

