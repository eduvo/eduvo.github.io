---
layout: post
title:  Avoid fork in threads
tagline: at least not with multi threads
tags: ruby
category: ilake
date: 2014-06-18 12:00
---
A thread calling a fork is the only thread in the created child process. Fork doesn’t copy other threads.
What it mean the thread in your current process would not available in your child process.

Let's see

{% highlight ruby %}
thread = Thread.new { }
thread2 = Thread.new { }

fork {
  puts "in child process #{Thread.list.count}"
}

puts "in main process #{Thread.list.count}"

# The output will be
#
# in main process 3
# in child process 1
{% endhighlight %}

So what is the problem? That mean when you use fork in a multithread program, the child process could not access the thread resource.

For example: Bunny is a multithread program client for Rabbitmq, we try to publish a message in main process and subscribe it in the child process through fork, then something bad happen, we still have the same queue instance, but the connection fails. Because the network I/O thread is not inherited, the connection could not be used in child process cause this fail.

{% highlight ruby %}
require "bunny"

conn = Bunny.new
conn.start
ch = conn.create_channel
q  = ch.queue("test1")

# publish a message to the default exchange which then gets routed to this queue
q.publish("Hello, everybody!")

puts "Main process queue object_id #{q.object_id}"

# fetch a message from the queue
# It would fail because bunny is multithread, and fork would not copy the thread.
# The output is
# ...continuation_queue.rb:25:in `pop': execution expired (Timeout::Error)
fork {
 puts "Child process queue object_id #{q.object_id}"
 delivery_info, metadata, payload = q.pop
 puts "This is the message: #{payload}"
 sleep (2)
}

conn.stop
{% endhighlight %}

So. Don't fork in threads when you rely on a threadpool.

references:

- [fork doc](http://www.ruby-doc.org/core-2.1.2/Process.html#method-c-fork)
- [threads-and-fork-think-twice-before-using-them ](http://www.linuxprogrammingblog.com/threads-and-fork-think-twice-before-using-them)
- [Bunny consumer_work_pool.rb](https://github.com/ruby-amqp/bunny/blob/master/lib/bunny/consumer_work_pool.rb#L33)
