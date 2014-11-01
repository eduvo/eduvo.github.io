---
layout: post
title: Identify slow queries
tagline: for MySQL (Percona)
tags: devops mysql database
category: ming
author: ming
date: 2014-11-01 10:42
---
What's happen if you found database queries are slow sometime. How to config your logs for mysql to identify the causes. It's not easy, but
some ways you can do first if there is no any other specific reason from resource shortage.

Check your database status if any slow queries are there.

    $ mysqladmin -u root -p status
    Enter password:
    Uptime: 126005  Threads: 1  Questions: 109  Slow queries: 0  Opens: 327  Flush tables: 1  Open tables: 80  Queries per second avg: 0.000

or for Percona, you can issue following command;

    $ sudo service mysql status
     * /usr/bin/mysqladmin  Ver 8.42 Distrib 5.5.38-35.2, for debian-linux-gnu on x86_64
    ...
    Uptime:     76 days 9 hours 17 min 56 sec

    Threads: 41  Questions: 148972423  Slow queries: 5894447  Opens: 1489  Flush tables: 1  Open tables: 552  Queries per second avg: 22.572

If you found many slow queries in last line, you can decide to enable slow queries log for tracking this issue.
Unmark following two lines in your /etc/mysql/my.cnf file to enable logs for slow queries.

    log_slow_queries        = /var/log/mysql/mysql-slow.log
    long_query_time = 2

where 2 means only log mysql queries exec longer than 2 seconds. And then, restart your mysql service.
There will log some slow queries for you to tune your code for database access. Of course, for the performance issue, you can disable it when it is not necessaryi anymore.
