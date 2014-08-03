---
layout: post
title: Anonymous functions
tagline: in javascript
tags: javascript
category: naiting
author: naiting
date: 2014-07-10 18:30
---
There are several way to execute an anonymous functions in javascript

{% highlight js %}
(function(){ console.log('hi'); }());

(function(){ console.log('hi'); })();

var i = function(){ console.log('hi'); }();

true && function(){ console.log('hi'); }();

0, function(){ console.log('hi'); }();

!function(){ console.log('hi'); }(); // return true

~function(){ console.log('hi'); }(); // return -1

-function(){ console.log('hi'); }(); // return NaN

+function(){ console.log('hi'); }(); // return NaN

new function(){ console.log('hi'); } // return Object
{% endhighlight %}

Maybe you'll never use that, but it is good to know what they do, especially when you dive into the source code by other developers.
