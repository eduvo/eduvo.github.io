---
layout: post
title: Select status
tagline: in html forms
tags: frontend javascript
category: oliver
author: oliver
date: 2014-08-08 16:00
---
Here is a tip about the select and forms.

We usually use some of plugin to prettify the select element and control or reflect the hidden select’s status with the elements plugin created like a mirror. ex. [select2][1], [fancyselect][2], ...

When we reset the form, the select will back to its original status but the elements the plugin created would not.
So we need to trigger select's change event or destroy and init again to avoid the value is not consistent between the hidden select and elements plugin created.

{% highlight coffeescript %}
resetForm = ->
  $('form')[0].reset()
{% endhighlight %}

Demo:

<p data-height="392" data-theme-id="0" data-slug-hash="nEtxj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/nEtxj/'>nEtxj</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

[1]: http://ivaynberg.github.io/select2/
[2]: http://code.octopuscreative.com/fancyselect/
