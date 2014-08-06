---
layout: post
title: human readable names
tagline: for columns
tags: rails
category: stephen
author: stephen
date: 2014-08-06 18:00
---
One case I needed to display a column name with a human readable name, in this case you can use `ActiveModel::Translation`.

After some searching I found there is a simple way to do this, like

{% highlight ruby %}
class TranslatedPerson
  extend ActiveModel::Translation
end

TranslatedPerson.human_attribute_name('my_attribute')
# => "My attribute"
{% endhighlight %}

This also provides the required class methods for hooking into the Rails internationalization API, including being able to define a class based i18n_scope and lookup_ancestors to find translations in parent classes.

- <http://apidock.com/rails/ActiveModel/Translation>
