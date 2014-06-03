---
layout: post
title:  Restore user data
tagline: from a mysql db
tags: mysql sequelpro
category: johnny
date: 2014-06-04 06:10
---
Lets say you accidentally delete a user and want to put him back. I will go grab a db backup and intentionally delete this user to get the related deletion sql log (on all associated tables). Copy those log and do (because on mac)

    pbpaste | grep DELETE FROM

We will get the related sql. Import the backup again and go `Query` in the Sequel Pro. Reverse the delete sql to select. For example, if we have

    SQL (0.4ms)  DELETE FROM `field_string_values` WHERE `field_string_values`.`id` = 1054006
    SQL (0.4ms)  DELETE FROM `field_string_values` WHERE `field_string_values`.`id` = 1062308

Then the select sql should be:

    SELECT `field_string_values `.* from `field_string_values ` WHERE `field_string_values `.`id` IN (1062308, 1054006);

In the lower window we will get the query result. Right click and select `COPY as SQL inset` and paste it in the mysql console then you are done! Keep doing this till all DELETE is restore. Then you have the student back.

