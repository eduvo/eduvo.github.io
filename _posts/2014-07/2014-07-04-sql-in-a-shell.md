---
layout: post
title: SQL in a shell
tagline: and more from the parallel package
tags: console sql
category: mose
date: 2014-07-04 14:10
---
There is a package that is not installed by default that I now grab systematically, it's called `parallel`.

    apt-get install parallel

or on mac

    brew install parallel

The `parallel` command is a pretty complex beast, but the package also comes with the `sql` command, which simplifies queries to any database from the console. There is just one command whatever the sql backend you use.

I first setup my dburl in `.sql/aliases` as:

    :dbmb mysql:///managebac
    :dboa mysql:///openapply
    :dbis psql://isis:password@localhost/intersis

And I can then use those aliases for quick sql commands:

    sql :dbmb "select count(*) from users"
    sql --show-processlist :dbis

Check <http://www.gnu.org/software/parallel/sql.html> for more examples of use. Also check <http://www.gnu.org/software/parallel/> package it's very powerful, but a bit complicated to catch it, maybe I will provide some examples of practical use in a later tip.
