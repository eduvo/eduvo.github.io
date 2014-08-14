---
layout: post
title: Multiple sort conditions
tagline: in arrays
tags: ruby arrays
category: stephen
author: stephen
date: 2014-08-13 08:00
---
In my work I found a case were I had to sort array using multiple conditions. For example:

* sort by date
* sort by time

In ruby it’s easy enough to create your own own sort rule :

	@college.working_days.at_present.sorted.sort do |a,b|
      if b.date > a.date
         -1
      else
         a.started_at <=> b.started_at
      end
	end

You can return 1 or -1 in order to specify it’s order.