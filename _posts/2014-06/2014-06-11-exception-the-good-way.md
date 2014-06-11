---
layout: post
title:  Exception the good way
tagline: to catch what you really need to catch
tags: ruby
category: roman
date: 2014-06-11 15:20
---
This tip from Roman describes the common exceptions catching bad practice, which everyone should be aware of and avoid. When writing

{% highlight ruby %}
  begin
    ...
  rescue Exception => e
    ...
  end
{% endhighlight %}

you will catch all errors, including SyntaxError. This may be a real problem, and the broken code will run until some customer reports it. The example two files illustrate it:

`bad_file.rb`:

    ()(())

`test.rb`:

{% highlight ruby %}
begin
  require 'bad_file'
rescue Exception => e
  puts "In rescue 1."
end

begin
  require 'bad_file'
rescue => e
  puts "In rescue 2."
end
{% endhighlight %}

When running test.rb, it prints:

{% highlight ruby %}
In rescue 1.
test.rb:8:in `require': ./bad_file.rb:1: syntax error, unexpected '(', expecting $end (SyntaxError)
()(())
   ^
from test.rb:8
{% endhighlight %}


which proves that `'rescue Exception => e'` style is dangerous and catches the error you would not want to be in the code.
