---
layout: post
title: Association merging
tagline: and don't forget to .reload
tags: rails activerecord
category: stephen
author: stephen
date: 2014-07-29 11:00
---
Recently I had to develop a merge function, student A (master) needs to merge
with student B (slave), slave have a lot of associations to be merged, in particular
comments, so here is the merge function

{% highlight ruby %}
def merge_student(master, slave)
  slave.comments.each do |comment|
    comment.student = master
    comment.save!
  end

  master.save!
  slave.reload # <--- at first I forgot to add that line
  slave.destroy
end
{% endhighlight %}

At first I didn't add the `slave.reload` and thought that all the comments would be successfully migrated, but actually the `slave.comments` were all destroyed.

Because when we do `slave.destroy`, slave still has its original comments associations, so I needed to make sure I call `slave.reload` before doing the slave.destroy.
