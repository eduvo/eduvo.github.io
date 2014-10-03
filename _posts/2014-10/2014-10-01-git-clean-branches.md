---
layout: post
title: Git clean branches
tagline: when git flow gets messy
tags: git
category: aaronh
author: aaronh
date: 2014-10-01 18:30
---
Anyone using git with gitflow may have faced this problem: many branches are not removed when feature or hotfix is done (especially when you merge manually and don't use `git flow feature finish`).

Firtunately, there is an easy way to remove all branch in same namespace like feature/*, hotfix/*

    git branch | awk -F. '/feature/{print $1}'| xargs -I {} git branch -D {}

or you can write it as a git alias and use stdin to assign the namespace, in your `.git/config`:

    [alias]
      mdb = "!f() { if [ -z $1 ]; then echo 'Please assign branch namespace.'; else git branch | awk -F. '/'"$1"'/{print}' | xargs -I {} git branch -D {}; fi }; f"

Then use it

    $ git mdb feature

