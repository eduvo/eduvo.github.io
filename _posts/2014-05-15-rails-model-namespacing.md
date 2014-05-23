---
layout: post
title:  Rails models namespacing
tagline: to avoid cluttering
tags: rails refactoring
---
iHower has a trick for models files organization. For example there are too many transcript related files under `app/models`, so we can move all to sub-directory `app/models/transcript` very easily:

- Add `app/models/transcript` to `config.autoload_paths` in `config/application.rb`
- `git mv` transcript related files to `app/models/transcript`

The advantage is that we don't need to modify any transcript code when moving. Sometimes adding namespace is error-prone and unnecessary.
