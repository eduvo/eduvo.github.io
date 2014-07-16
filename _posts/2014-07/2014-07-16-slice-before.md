---
layout: post
title: slice_before
tagline: for custom splits
tags: ruby
category: ilake
date: 2014-07-16 12:00
---
slice_before is a convenient method to split stuff. for example you could easily split an array on even values.

{% highlight ruby %}
[1,2,3,4,5].slice_before{|e| e%2 == 0 }.map{|a| a}
{% endhighlight %}

you could split the hash by the keys you want.

{% highlight ruby %}
def split_hash_by_key(hash, *args)
  hash.slice_before { |k,v| args.include? k }.map { |a| a.to_h }
end

# split_hash_by_key({ :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :c, :e )
# [ {:a=>1, :b=>2}, {:c=>3, :d=>4}, {:e=>5, :f=>6} ]
{% endhighlight %}

{% highlight ruby %}
"abcedfghijklmnopqrstuvwxyz".split('').slice_before{|c| c =~ /[aeiou]/i }.map{|a| a}
# [["a", "b", "c"], ["e", "d", "f", "g", "h"], ["i", "j", "k", "l", "m", "n"], ["o", "p", "q", "r", "s", "t"], ["u", "v", "w", "x", "y", "z"]]
{% endhighlight %}

Check <http://apidock.com/ruby/Enumerable/slice_before> for more info.
