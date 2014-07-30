---
layout: post
title: Rename current file in vim
tagline: without getting out of it
tags: vim
category: ilake
date: 2014-07-30 11:00
---
We often need to change the filename of the current file when we are coding, here is a easy way for renaming your current file in vim (just add it in your `.vimrc`).

{% highlight vim %}
function! RenameFile()
  let old_name = expand('%')
  let new_name = input('New file name: ', expand('%'), 'file')
  if new_name != '' && new_name != old_name
    exec ':saveas ' . new_name
    exec ':silent !rm ' . old_name
    redraw!
  endif
endfunction

map <leader>n :call RenameFile()<cr>
{% endhighlight %}
