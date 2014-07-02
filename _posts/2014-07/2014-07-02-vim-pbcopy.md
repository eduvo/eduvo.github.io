---
layout: post
title:  Vim pbcopy
tagline: to yank to clipboard
tags: vim mac
category: aaronh
date: 2014-07-02 21:10
---
This only works on Mac OSX:

Some time we need not only to yank inside vim, also can yank to clipboard,
that's very easy, you just need map some key your `.vimrc`:

    vmap <Somekey> :w !pbcopy<CR><CR>

