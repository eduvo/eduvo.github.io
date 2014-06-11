---
layout: post
title:  Capybara target window
tagline: to test links with target
tags: capybara testing
category: rostyslav
date: 2014-06-12 06:12
---
In Capybara when you need to test a page that was opened by clicking a link with `target="_blank"`, all you need to do is to write:

{% highlight ruby %}
  within_window(page.driver.browser.get_window_handles.last) do
    ...
    some_code_here
    ...
  end
{% endhighlight %}

Note! Beyond that code you'll be at the page where you clicked that link.
