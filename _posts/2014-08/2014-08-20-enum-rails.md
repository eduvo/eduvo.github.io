---
layout: post
title: enum
tagline: in Rails 4.1
tags: rails activerecord
category: saurabh
author: saurabh
date: 2014-08-20 06:00
---
[ActiveRecord Enum][1] is a functionality introduced in Rails 4.1 to create boolean column with reference to states in your model. We could easily convert our enum definition into a full fledged state machine.

In order to implement this in our app, we would need to create a column to store the state of the model:

    add_column :articles, :status, :integer, default: 0
   	

Now, we need to access this column in model and define the enum rule on it.

	enum status: [:new, :accepted, :rejected ]

As you can see, we have already defined default 0, which will assign the value to 0th column in our array.Hence, whenever a new article is created, it's status will be new. Enum reads the array of status names, and maps it to their positions e.g. new to 0, accepted to 1, rejected to 2. 

	2.1.0 :007 > article.new?
 	=> true

To toggle a state, we just need to add a bang at the end :
	
	2.1.0 :008 > article.accept!
   	(0.2ms)  BEGIN
  	SQL (1.1ms)  UPDATE "articles" SET "status" = $1, "updated_at" = $2 WHERE "articles"."id" = 980190962  [["status", 1], ["updated_at", "2014-08-20 02:00:17.276697"]]
  	(0.7ms)  COMMIT
 	=> true

Check the status :

	2.1.0 :009 > article.status
 	=> "accepted"

[1]: http://api.rubyonrails.org/v4.1.0/classes/ActiveRecord/Enum.html