---
layout: post
title:  Paths in Capybara
tagline: when there are params
tags: rspec rails testing
category: rostyslav
date: 2014-07-02 21:00
---
Here's another tip about RSpec/Capybara testing. So, for example, when you want to test a current path of a page you were redirected to or something, normally you will write something like this:

{% highlight ruby %}
  expect(current_path).to eq("/sample/route")
{% endhighlight %}

or

{% highlight ruby %}
  expect(current_path).to eq(sample_route_path)
{% endhighlight %}

if you prefer to use named routes.

But it's not going to work when you want to test a path with given params. For example:

{% highlight ruby %}
  visit("/sample/route?page=3")
  puts "current_url = #{current_url.inspect}"
  puts "current_path = #{current_path.inspect}"
{% endhighlight %}

will give you outputs:

{% highlight ruby %}
  current_url = "http://domain.subdomain/sample/route?page=3"
  current_path = "/sample/route"
{% endhighlight %}

And neither full url nor path without params is what we want here. My solution is to add this method to a module (existed or newly created) inside `rspec/support` folder of a rails app:

{% highlight ruby %}
  module PathCapybaraModule

    def current_path_with_params
      URI.parse(current_url).request_uri
    end

  end
{% endhighlight %}

To use it you just need to include that module in your `spec_helper.rb`, like this:

{% highlight ruby %}
  RSpec.configure do |config|
    config.include PathCapybaraModule
  end
{% endhighlight %}

So, now if you try:

{% highlight ruby %}
  visit("/sample/route?page=3")
  puts "current_path_with_params = #{current_path_with_params.inspect}"
  puts expect(current_path_with_params).to eq("/sample/route?page=3")
  puts expect(current_path_with_params).to eq(sample_route_path(:page => 3))
{% endhighlight %}

it will give you:

{% highlight ruby %}
  current_path_with_params = "/sample/route?page=3"
  true
  true
{% endhighlight %}

As you can see it works well with both a string-given path and a named route. Enjoy!

