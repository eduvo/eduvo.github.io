---
layout: post
title:  Bash prompt with git branch
tagline: the simple way
tags: console bash
category: stephen
author: stephen
---
Stephen is well aware most of us already know about this (or use oh-my-zsh with already prepared themes). Here is what he puts in his `.bash_profile`

Show git branch name at you terminal

    # get current branch
    function git_branch {
        ref=$(git symbolic-ref HEAD 2> /dev/null) || return;
        echo "("${ref#refs/heads/}") ";
    }
    PS1="[\[\033[1;32m\]\w\[\033[0m] \[\033[0m\]\[\033[1;36m\]\$(git_branch)\[\033[0m\]$ “
