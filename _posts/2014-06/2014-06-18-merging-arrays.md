---
layout: post
title:  Merging arrays
tagline: and remove duplicates
tags: ruby
category: stephen
date: 2014-06-18 12:40
---
Here is a small tip for ruby array operation

We have

    a1 = ["a","b"]
    a2 = ["b","c"]

Say we want to merge this two array to get a new array and it’s element must unique, you can

    a3 = a1 + a2
    a3.uniq!
    # ["a","b","c"]

You can also do it like this

    a1 | a2
    # ["a","b","c"]

This is much quicker for our lazy fingers.
