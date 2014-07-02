---
layout: post
title:  Profiling Rspec
tagline: to track long tests
tags: rails rspec
category: johnny
date: 2014-07-02 16:00
---
Recently I am trying to shorten the time it takes to run rspec on OA. Profiling is a starting point to know which spec takes longest time.

In RSpec 2.14, the team introduced the `--profile` option to list top N slowest spec in the test suit. Simply add following in our `.rspec` file:

    --profile N

The default value is 10, but you can specify N to list how many you wanna see.

