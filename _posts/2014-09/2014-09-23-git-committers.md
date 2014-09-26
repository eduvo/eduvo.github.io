---
layout: post
title: Git commiters
tagline: for your readme file
tags: git
category: johnny
author: johnny
date: 2014-09-23 11:00
---
If you want to know who has contributed to the current project (to put on the README.md), this is what you need.

    git log | grep Author | sort | uniq


