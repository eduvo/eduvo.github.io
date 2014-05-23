---
layout: post
title:  tmuxinator
tagline: autolaunch all your stuff
tags: devtool console tmux
---
ILake always use tmuxinator <https://github.com/tmuxinator/tmuxinator> to manage the services and tool he needs in a project. For example this is what he uses in isis

    project_name: isis
    project_root: ~/rails_app/faria_prj/isis
    pre_window: rvm use ruby-2.1.1
    windows:
      - editor:
      - console:
      - nothing:
      - logs: tail -f log/development.log
      - guard: guard
      - server: spring rails s -p 8888
      - zeus: zeus start
      - redis: redis-start
      - sidekiq: sidekiq

It will help start redis, sidekiq zeus, guard etc...
