---
layout: post
title:  Array to Ostruct
tagline: monkey patching
tags: ruby testing
---
Naiting is doing front-end but he's leveling up in ruby coding, and he found this monkey patching especially useful in the context of testing:

{% highlight ruby %}
    class Array
      def to_os
        self.map{ |x| OpenStruct.new(x) }
      end
    end
{% endhighlight %}

Then rather than

{% highlight ruby %}
    @subjects= [
      OpenStruct.new(:type => 'academics', :title => 'Language A', :icon => 'language_a'),
      OpenStruct.new(:type => 'academics', :title => 'Second Language', :icon => 'language_b'),
      OpenStruct.new(:type => 'academics', :title => 'Experimental Sciences', :icon => 'sciences')
    ]
{% endhighlight %}

you can

{% highlight ruby %}
    @subjects = [
      {:type => 'academics', :title => 'Language A', :icon => 'language_a')},
      {:type => 'academics', :title => 'Second Language', :icon => 'language_b')},
      {:type => 'academics', :title => 'Experimental Sciences', :icon => 'sciences')},
    ].to_os
{% endhighlight %}

or even, have fake data stored in a yaml file

{% highlight ruby %}
    @subjects = YAML.load_file("subjects.yml').to_os
{% endhighlight %}
