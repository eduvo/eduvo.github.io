---
layout: post
title:  Benchmarking in rails
tagline: and manipulate the returned values
tags: rails devtool
category: aaronk
date: 2014-05-28 19:30
author: aaronk
---
This week I have to do some benchmarking and I found out rails provides a library which can help accomplish it easily.

<http://apidock.com/rails/ActiveSupport/Benchmarkable/benchmark>

Refer to the example code, which can do benchmark for the given process and write into log file.

But my requirements is to get the benchmarks and do some extra calculation. So I read the source code and finally I did something like:

{% highlight ruby %}
milliseconds = Benchmark.ms do
   ........
end
{% endhighlight %}

It will return the time taken by the process, then I can do anything I want with it.
