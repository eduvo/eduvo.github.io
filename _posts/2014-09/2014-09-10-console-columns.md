---
layout: post
title: Console columns
tagline: for better readability
tags: console
category: mose
author: mose
date: 2014-09-10 06:00
---
When you live in your console, it's always good to find ways to stay there. The `column` command was recently brought to my attention by <https://sysadmincasts.com/episodes/36-cli-monday-column-and-tr> and despite years of console life, godamn I was unaware of this simple tool.

It is very useful for displaying csv files in a readable way, for example:

    $ head members_export_0bfc48c38f.csv
    LATITUDE,LONGITUDE,CC,REGION
    24.7798,120.93,TW,HSZ
    52.0927,5.1158,NL,UT
    25.0389,121.509,TW,TPE
    47.6836,-122.122,US,WA
    24.1403,120.682,TW,TXG
    37.4055,-122.078,US,CA
    37.4055,-122.078,US,CA
    37.4055,-122.078,US,CA
    26.1405,-80.1738,US,FL

yuck. Let's prettify it.

    $ head members_export_0bfc48c38f.csv | column -t -s,
    LATITUDE  LONGITUDE  CC  REGION
    24.7798   120.93     TW  HSZ
    52.0927   5.1158     NL  UT
    25.0389   121.509    TW  TPE
    47.6836   -122.122   US  WA
    24.1403   120.682    TW  TXG
    37.4055   -122.078   US  CA
    37.4055   -122.078   US  CA
    37.4055   -122.078   US  CA
    26.1405   -80.1738   US  FL

ohh, my world just changed!
