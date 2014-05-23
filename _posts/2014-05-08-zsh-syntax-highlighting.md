---
layout: post
title:  zsh-syntax-highlighting
tagline: instant coloring in the console
tags: console zsh rcfiles
---
This week AaronH shares some secrets of his configuration. You can check his whole config setup at <https://github.com/aar0nTw/HomeConf> but there is one special piece in that config.

If you use oh-my-zsh (and really, you should), clone <https://github.com/zsh-users/zsh-syntax-highlighting> in `.oh-my-zsh/custom/plugins` and add it in your `.zshrc` in the list of `plugins=()`. This will change color of your text if the command you type is not found.

As an extra tip, Aaron plugins list looks like:

    plugins=(git rails ruby zsh-syntax-highlighting rake npm gem brew web-search rvm bundler tmux mux zeus github heroku colored-man copydir copyfile urltools themes postgres)

