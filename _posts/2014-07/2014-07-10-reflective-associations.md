---
layout: post
title: Reflect on association
tagline: in activerecord
tags: rails activerecord
category: stephen
author: stephen
date: 2014-07-10 22:30
---
In rails sometimes you need to grep model’s declared associations. If you want get all `:has_many` relationships, instead of enum all association names, you can use `reflect_on_all_associations(:has_many)`.

In model `Student`

{% highlight ruby %}
has_many :field_group_records, :as => :record, :order => :position , :dependent => :destroy
has_many :field_string_values, :as => :record , :dependent => :destroy
has_many :field_single_option_values , :as => :record , :dependent => :destroy
has_many :field_multi_option_values , :as => :record , :dependent => :destroy
has_many :field_multi_options , :through => :field_multi_option_values
{% endhighlight %}

instead of hardcoding the list

{% highlight ruby %}
contained = [ :field_group_records,
              :field_string_values,
              :field_single_option_values,
              :field_multi_option_values
            ]
{% endhighlight %}

we can get it dynamically

{% highlight ruby %}
contained = Student.reflect_on_all_associations(:has_many).map do |assc|
  assc.klass if assc.name.to_s.start_with?('field') && assc.options[:dependent] == :destroy
end
{% endhighlight %}

doc is at
<http://api.rubyonrails.org/classes/ActiveRecord/Reflection/ClassMethods.html#method-i-reflect_on_all_associations>
