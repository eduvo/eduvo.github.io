---
layout: post
title: Disable controller prefix 
tagline: for partials
tags: rails partials
category: aaronk
author: aaronk
date: 2014-08-20 07:00
---

When using partial renderer, Rails adds the controller namespace as prefix while resolving the partial path. For example: when rendering ```@student``` under ```StudentsController``` the partial path becomes ```'students/student'```

While doing it under Admin::StudentsController, the partial path will become ```'admin/students/student'```

Sometimes, repeating the code or calling from other namespaces becomes tidious. Also, in these cases partial names are unique. 

We can disable this behaviour in rails application config:

	config.prefix_partial_path_with_controller_namespace = false

Or just switch it off before rendering the partial in the view:

	<% self.prefix_partial_path_with_controller_namespace = false %>
	<%= render @student %>