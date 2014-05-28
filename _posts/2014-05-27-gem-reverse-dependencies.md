---
layout: post
title:  Gem reverse dependencies
tagline: who uses who
tags: ruby rubygems
category: mose
---
I have been looking for a way to see what gem uses a gem, so I can see examples of integration in other projects. The rubygems API guide don't tell anything about such reverse dependency query. But it is actually there, it got merged some time ago, and optimized, but it is not documented yet (it runs really fast, kudos Rubygems guys).

{% highlight ruby %}
ruby -ropen-uri -rpp -ryaml \
     -e 'pp YAML.load(open("https://rubygems.org/api/v1/gems/rails_best_practices/reverse_dependencies.yaml"))'

["metric_fu",
 "flyerhzm-metric_fu",
 "edouard-metric_fu",
 "devver-metric_fu",
 "goldstar-metric_fu",
 "socializer",
 "trollface",
 "guard-rails_best_practices",
 "rferraz-metric_fu",
 "git-hooks-helper",
 "odor",
 "rake_check",
 "koality",
 "danmayer-metric_fu",
 "bf4-metric_fu",
 "metrics_satellite",
 "code_hunter",
 "kinit",
 "rails-audit",
 "pronto-rails_best_practices",
 "free_disk_space",
 "warder",
 "ruby_osx_app",
 "sanelint"]
{% endhighlight %}

Out of curiosity I counted some wellknown gems usages by adding a `.count` at the end:

{% highlight bash %}
rake:    23766
rails:   6283
thor:    2786
pry:     2870
sinatra: 1964
devise:  422
{% endhighlight %}


_mose_
