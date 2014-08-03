---
layout: post
title:  Vim paste buffer
tagline: to paste again and again
tags: vim
category: ilake
author: ilake
date: 2014-06-26 02:50
---
When you use vim, if you select some text and replace others, it is annoying the paste buffer is overwriten by the removed text. You cannot paste again and again. This config is helpful to avoid this situation (put it in `~/.vimrc`)

{% highlight vim %}
function! RestoreRegister()
  let @" = s:restore_reg
  return ''
endfunction

function! s:Repl()
  let s:restore_reg = @"
  return "p@=RestoreRegister()\<cr>"
endfunction
vmap <silent> <expr> p <sid>Repl()
{% endhighlight %}

*additionnal comment from hSATAC*

It may not work well if you have `set clipboard=unnamed`, in which case you can use:

{% highlight vim %}
function! RestoreRegister()
  let @" = s:restore_reg
  if &clipboard == "unnamed"
    let @* = s:restore_reg
  endif
  return ''
endfunction
{% endhighlight %}
