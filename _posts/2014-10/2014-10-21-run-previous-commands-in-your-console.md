---
layout: post
title: Run previous commands
tagline: in your console
tags: console bash
category: johnny
author: johnny
date: 2014-10-21 11:30
---

There are few ways to run previous commands in your console.

1.
You can keep pressing UP key to brows your previous cmd and just hit ENTER to re run it.

2.
!! will run the last command you executed in the console.

3.
If you have a blur impression but not sure what you have run. No worries.
First run history then grep for something you still remember

    history | grep rest

then you will get something like

    316  touch tmp/restart.txt
    321  sudo service nginx restart

now if you want to run #316 simply run

    !316

then #316 will run again!
