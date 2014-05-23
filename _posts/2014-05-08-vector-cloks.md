---
layout: post
title:  Vector clock
tagline: for conflict detection
tags: rabbitmq
---
Now brace, here is a piece of science from iHower. He's implementing a conflict detection mechanism for the Message Bus.

The purpose is to prevent conflicting updates. For example: If a user updates a student name in MB, and another user update the same student's birthday in IS at the same time (or MB's update does not reflect to IS for any reason). Since message bus is asynchronous, it's possible these two core messages will overwrite each other randomly if there is no conflict detection.

The algorithm iHower uses is vector clock <http://en.wikipedia.org/wiki/Vector_clock> which is the most common approach used by peer-to-peer distributed systems. A vectors clock for three nodes (MB/OA/IS) will be like { MB: 1, OA: 1, IS: 2 }.

Each time a node has an internal update, it updates its own counter, so an update at MB would change its clock to { MB: 2, OA: 1, IS: 2 }. Whenever two nodes sync, it will sync their vector clock too.

Based on the vector clock, we can tell if one clock is newer than another because the newer clock will have "ALL" its counters greater or equal then those in the older clock.

So { MB: 3, OA: 2, IS: 2 } is newer than { MB: 2, OA: 1, IS: 2 }, but { MB: 3, OA: 1, IS: 2 } and { MB: 2, OA: 1, IS: 3 } have write-write conflict.

Vector clocks can help us spot inconsistency, but doesn't resolve them. This will be our next todo.
