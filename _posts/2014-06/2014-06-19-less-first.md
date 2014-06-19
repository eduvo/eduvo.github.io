---
layout: post
title:  Less first
tagline: for safer file examination
tags: console
category: mose
date: 2014-06-19 14:50
---
When working on a remote server, I use `less` instead of `tail` or `vi` to check files, the more I can.

### filter

- with `&searchstring` it will hide all lines not matching searchstring, like a very simple grep from the console
- just `&` with nothing to get back to full view

### edit file

- when in `less /etc/hosts` if I find out I need to edit it I just type `v` it opens it in vi
- when you quit the editor you are back in less

### follow mode

- when in `less production.log`, if you want to follow incoming changes type `F` it will become like a `tail -f` but it keeps the syntax highlighting that was made with a `/` search
- when in follow mode with `F` you can `ctrl-c` any time and examine the new stuff
- note that if you are in filter mode the follow respects it (like if you did a `grep something/var/log/auth.log | grep 'Invalid user'`)

### multifiles

- you can open several file and navigate like in vim with `:n` and `:p`
- when less is open you can open a new file with `:e`

### call options inside less

- you can call any launch option from inside less, one I use often is `-S` that will enable/disable wrapping of long lines, very useful when parsing web server log files
- to disable/enable search highlighting just `-G`
- any other launch option can be called from inside less, pretty convenient
