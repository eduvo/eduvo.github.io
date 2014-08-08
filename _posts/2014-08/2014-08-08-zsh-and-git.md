---
layout: post
title: Zsh and git
tagline: with oh-my-zsh and git-up
tags: git zsh
category: johnny
author: johnny
date: 2014-08-08 06:00
---
Here is the [git plugin][1] I enabled in [oh-my-zsh][2]

To enable the plugin:

    vim ~/.zshrc
    plugins=(git git-flow tmux rails ruby zsh-syntax-highlighting rake gem brew npm)

Now you can use some alias the plugin provided. To name a few:

    gco BRANCH = git checkout BRANCH
    grbi = git rebase -i
    gcmsg = git commit -m

You can see the full list with

    alias | grep git

A useful one is `current_branch` (use the backtick). I use this when I specify which branch I want to deploy.

Another git tool that deserves attention is the gem [git-up][3]

The problem of `git pull` is that instead of rebase it merge the upstream. This will make the git graph messy. `git-up` uses `pull --rebase` on all your local branch from the origin. No more checkout-and-pull loop anymore.

[1]: https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/git/git.plugin.zsh
[2]: https://github.com/robbyrussell/oh-my-zsh
[3]: https://github.com/aanand/git-up
