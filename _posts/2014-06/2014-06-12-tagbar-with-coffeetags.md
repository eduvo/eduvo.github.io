---
layout: post
title:  Tagbar with Coffeetags
tagline: for coffeescript in vim
tags: vim coffeescript
category: aaronh
date: 2014-06-12 06:00
---
Tagbar provide a sidebar in vim to show the tags from ctags of current file. But ctags doesn't support coffeescript, so we have to add tag rules manually in `~/.ctags` or just add a config for tagbar, to make tagbar use CoffeeTags when we are editing file in coffeescript.

- <https://github.com/majutsushi/tagbar>
- <https://github.com/lukaszkorecki/CoffeeTags>

and add the following to `.vimrc`:

    if executable('coffeetags')
      let g:tagbar_type_coffee = {
        \ 'ctagsbin' : 'coffeetags',
        \ 'ctagsargs' : '',
        \ 'kinds' : [
          \ 'f:functions',
          \ 'o:object',
        \ ],
        \ 'sro' : ".",
        \ 'kind2scope' : {
          \ 'f' : 'object',
          \ 'o' : 'object',
        \ }
      \ }
    endif

![coffeetags](/assets/images/2014-06-12-coffeetags.png)
