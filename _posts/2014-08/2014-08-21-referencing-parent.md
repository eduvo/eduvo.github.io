---
layout: post
title: referencing parent selector
tagline: in SASS
tags: sass frontend
category: oliver
author: oliver
date: 2014-08-21 07:00
---

I want to share a SASS selector called 'referencing parent selector’:

	.content 
	  width: 100px
	  height: 100px
	  background: yellow
	  .wrapper &
	    background: blue

This means the background in ```.content``` is yellow but it would turn blue if its parents include ```.wrapper```. This is like a condition, which checks for the presence of a class in the parent element and assigns the background color accordingly. It could have some interesting use cases, specially where you need to use uniform classnames with varied results.

In order to get it right, we need to make sure it's written correctly. Following is how it should not be written :

	.wrapper
	  .content
	    .wrapper &
	 background: blue

This will override the second wrapper and will refer to the first wrapper class and referencing parent selector will be inserted to the first selector in the group. So it will compile to :


	.wrapper .wrapper 
	   .content{background: blue;}