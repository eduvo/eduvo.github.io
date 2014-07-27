---
layout: post
title: Gsub in String subclass
tagline: will not recognize its global variables
tags: ruby
category: ilake
date: 2014-07-27 11:00
---
When you use gsub with a block on a sub-class of String, variables such as $1, $2, $`, $&, and $’ will not be set appropriately.

For example:

{% highlight ruby %}
irb(main):001:0> class X < String; def gsub(*args); super; end end
=> nil
irb(main):002:0> X.new('hello').gsub(/(l)/) { $1 + 'm' }
NoMethodError: undefined method `+' for nil:NilClass
    from (irb):2:in `block in irb_binding'
    from (irb):1:in `gsub'
    from (irb):1:in `gsub'
    from (irb):2
    from /Users/aaron/.local/bin/irb:12:in `<main>'
irb(main):003:0>
{% endhighlight %}

Ya, the SafeBuffers is one of the example. The issue we met is we tried to generate view in the presenter, then parse the result. and you could not get the $1 in the block. The solution is force it to String by to_str, then you could use gsub as usual.

{% highlight ruby %}
  # presenter.rb
  def render_view(options = {})
    av = ActionView::Base.new(ActionController::Base.view_paths)
    av.render(:template => "index.pdf.erb")
  end

  def parsing
    render_view.gsub!( /src=["']+([^:]+?)["']/i ) do |m|
      # $1 etc... will not be available .. ouch
    end
  end

  def fixed_parsing
    render_view.to_str.gsub!( /src=["']+([^:]+?)["']/i ) do |m|
      # $1 etc... will be available .. yeeeha
    end
  end
{% endhighlight %}

reference about SafeBuffer in Rails: <https://github.com/rails/rails/pull/2248>
