---
layout: post
title:  rspec-given
tagline: like a cucumber without the cucumber
tags: rails4 rspec testing
---
Ilake wanted to share especially with the rails4 guys that are this time doing it right about testing, that in TPE we use rspec-given all over the place.

It gives a clear view on which part prepares data, what you try to test and what you expect. It can be mixed with traditional rspec syntax (like with `before { RecordingMailer.stub(:recording_email) }` for stubbing).

- <https://github.com/jimweirich/rspec-given>
