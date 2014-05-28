---
layout: post
title:  Testing in Vim
tagline: inside tmux
tags: vim tmux console testing
category: ilake
---
iLake has another console trick this week. With vim, he uses tmux, with zeus or spring, and Turbux + tslime

- turbux could let you send the testing command, <https://github.com/jgdavey/vim-turbux>
- tslime let you decide where the command should go, session, windows or panel. <https://github.com/jgdavey/tslime.vim>

and combine with zeus or spring

    let g:turbux_command_rspec = 'zeus rspec'

Then you can test your rspec smooth and fast without leaving vim (and pretend you use emacs in fact).
