---
layout: post
title:  fs_usage debug
tagline: for js compilation
tags: mac console
category: aaronh
date: 2014-06-04 18:20
---
Here is a system usage command in mac terminal. `fs_usage` can show you all file system action, I use it for asset-pipeline debugging.

When I need check if an asset file is currently loaded, I'll use it like

    $ sudo fs_usage | grep FILE_NAME.js

It also can be used for checking how the precompilation process works. Once I used it to find a process issue of recursive compilation in the requirejs-rails gem, and reduced compilation time by 95%.
