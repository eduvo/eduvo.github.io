---
layout: post
title:  Console log
tagline: but shorter because devs are lazy
tags: javascript coffeescript
---
Naiting use console.log very frequently, so he has some function when developing (in coffescript)

    _console = (act, something) ->
      typeof console != 'undefined' &&
      typeof console[act] == 'function' &&
      console[act](something)
    ll = (t) -> _console 'log', t
    tt = (t) -> _console 'table', t
    cc = -> _console 'clear'

That way rather that putting `console.log "blah"` he will just use `ll "blah"` and it will not fuckup IE if he forgets to remove it.
