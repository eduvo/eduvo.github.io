---
layout: post
title: Coffee to Js in Vim
tagline: with one key down
tags: javascript coffeescript vim
category: ilake
author: ilake
date: 2014-07-09 16:30
---
If you are not very familiar with coffeescript you may want to know what it will look like when it is compiled to js. This is a simple script to help you do that in vim.

{% highlight vim %}
" Created compiled js file
function! s:Coffee2Js()
  let current_coffee = expand('%')
  let filename = substitute(expand('%:t'), ".coffee$", "", "")
  exec('! coffee -co /tmp ' . current_coffee)
  exec('split /tmp/' . filename . '.js')
endfunction
"
" Register a new command `C2J` for compile coffee to a js file
command! C2J :call <SID>Coffee2Js()
{% endhighlight %}

Now it is easy to check the js :)
