---
layout: post
title:  Ruby at_exit
tagline: for clever process termination
tags: ruby
category: aaronk
author: aaronk
date: 2014-06-19 17:50
---
Here is a easy way we can ask ruby to execute something when a process is terminated. This applies mostly (but not only) to command-line code and daemons. Just use 'at_exit' in our process.

for example:

{% highlight ruby %}
def run
  at_exit do
    puts "I am terminated, save me quickly"
  end
  loop {}
end
{% endhighlight %}

When I execute run and for some reason the process is (ex: ctrl+c), it will execute the codes in the block of at_exit

This trick helped us to stop some sub-process when stopping our message queue consumer daemon :)
