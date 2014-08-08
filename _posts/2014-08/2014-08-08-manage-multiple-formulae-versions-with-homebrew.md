---
layout: post
title: Manage multiple versions of a formula
tagline: with homebrew
tags: mac brew
category: saurabh
author: saurabh
date: 2014-08-08 18:00
---
I had a problem lately, while installing the development environment on my machine. I needed to install two different versions of MySQL. It seems brew has a way to manage multiple versions of a formula and switching between them just like we do with rvm and rubies. For this you need [homebrew versions tap][1] installed on your machine.

First switch to your local brew directory:

    $ cd /usr/local

One you are in the brew directory, you can check the available 

    /usr/local$ brew versions mysql

	5.6.20   git checkout 8f59be5 Library/Formula/mysql.rb
	5.6.19   git checkout 3d3d8ae Library/Formula/mysql.rb
	......................................................

In order to get a particular version, just checkout the matching commit.

    /usr/local$ git checkout 336c976 Library/Formula/mysql.rb

This will checkout the specified version of the formula to the cellar. In order to install the other version, first we need to unlink the existing version of the forumla.

	/usr/local$ brew unlink mysql
	Unlinking /usr/local/Cellar/mysql/5.6.20... 14 symlinks removed

Now you can install the current cellar version of the formula.

	/usr/local$ brew install mysql

Once the installation is complete, you can easily switch between the different versions of the formula.

	/usr/local$ brew switch mysql 5.6.20
	Cleaning /usr/local/Cellar/mysql/5.5.19
	Cleaning /usr/local/Cellar/mysql/5.6.20
	14 links created for /usr/local/Cellar/mysql/5.6.20

[1]: https://github.com/Homebrew/homebrew-versions