---
layout: post
title:  Justify me this
tagline: for justification on one line
tags: css sass frontend
category: oliver
---
Oliver tells us about a special trick on css. This css code can spread distribution width without using table element.
`text-align: justify` is used to let a block take full width of an element. But it’s not working when there only a line, so I use a pseudo-element `:after` to be a last fill line. Here is a sass example:

{% highlight sass %}
    ul
      display: block
      text-align: justify
      line-height: 0
      li
        display: inline-block
      &:after
        content: ''
        display: inline-block
        width: 100%
{% endhighlight %}
