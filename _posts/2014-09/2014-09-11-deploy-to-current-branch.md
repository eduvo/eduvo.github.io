---
layout: post
title: Deploy to current branch
tagline: with capistrano
tags: rails
category: johnny
author: johnny
date: 2014-09-11 04:00
---
From day to day we deploy arbitrary branches to our staging server for testing. During deployment, we need to specify which branch we intend to deploy. In our deploy.rb we have something like

    set :branch, fetch(:branch, "develop")

So we can

    cap staging deploy -s branch=feature/my-feature-branch

But it's annoying to copy the branch name using mouse. Instead, we add this alias to our .bashrc file:

    alias cb='git rev-parse --abbrev-ref HEAD'

Next time when we deploy your current branch, simply use:

    cap staging deploy -s branch=`cb`

(note the backtick surround cb)

Then you will deploy the branch you are currently working on.

