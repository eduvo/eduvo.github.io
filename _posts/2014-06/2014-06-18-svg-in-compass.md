---
layout: post
title:  SVG in Compass
tagline: experimental support
tags: compass sass html5
category: aaronh
date: 2014-06-18 16:30
---
With `$experimental-support-for-svg`, Compass brings a way to make websites compatible with modern browser.

Some function syntaxes like `linear-gradient` don't have a clear syntax spec, different browsers have different implementations.
<https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient>

For example IE won't support `linear-gradient(left, #ffffff, #dddddd)`, it has to be `linear-gradient(to right, #ffffff, #dddddd)`.

So if you write `left`, Compass will write browser-specific prefixes `-webkit` and `-moz` but it won't change the `left` for IE (which needs `to right`), so when you write the following code in sass, IE(10/11) will not display the linear-gradient background.

{% highlight sass %}
    +background-image(linear-gradient(left, #ffffff, #dddddd))
{% endhighlight %}

So you can set the `$experimental-support-for-svg` to `true` to solve this problem with a svg-image

{% highlight sass %}
    $experimental-support-for-svg: true
    +background-image(linear-gradient(left, #ffffff, #dddddd))
{% endhighlight %}

That will generate a data URI based svg image like

{% highlight sass %}
    background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlb..")
{% endhighlight %}

