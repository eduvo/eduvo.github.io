---
layout: post
title:  RabbitMQ Receipts
tagline: avoid getting lost in the rabbit hole
tags: rails rabbitmq
category: aaronk
author: aaronk
---
AaronK recently faced the need to implement a way so that each message from the message queue tells the sender if the message was delivered. He had very interesting reading about it. He works now on getting the sync status that way:

* RabbitMQ RPC: <http://rubybunny.info/articles/queues.html>
* Rails Stream <http://www.sitepoint.com/streaming-with-rails-4/> (funnily that article was written by saurabh, the guy at the booth near us at rubyconf. Small world.)
