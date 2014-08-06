---
layout: post
title: Dash from vim
tagline: on mac
tags: vim mac
category: ilake
author: ilake
date: 2014-08-06 22:00
---
Dash is an awesome api document browser (on mac), there is an easy way to search a keyword in vim

{% highlight vim %}
function! SearchDash()
  let s:browser = "/usr/bin/open"
  let s:wordUnderCursor = expand("<cword>")
  let s:url = "dash://".s:wordUnderCursor
  let s:cmd ="silent ! " . s:browser . " " . s:url
  execute s:cmd
  redraw!
endfunction

map <leader>d :call SearchDash()<CR>
{% endhighlight %}

Then just use `<leader>d` to pop up the doc for the word your cursor is on.

- <http://kapeli.com/dash>
