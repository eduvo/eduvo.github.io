---
layout: post
title: How to test gem
tagline: locally
tags: rubygems
category: johnny
author: johnny
date: 2014-10-21 22:58
---
If you want to test the functionality of your gem before pushing it to public, you can specify the path of your local gem in your Gemfile.

Like this

    gem 'foo', :path => 'path/to/gem'
