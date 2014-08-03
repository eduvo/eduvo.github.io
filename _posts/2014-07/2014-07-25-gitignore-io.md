---
layout: post
title: Gitignore.io
tagline: or .gitignore as a service
tags: git
category: aaronh
author: aaronh
date: 2014-07-25 11:00
---
When you create a project, you may sometimes wonder what you need add in the `.gitignore` file.
Fear no more, there is a service named <http://gitignore.io>, you can search by language and framework that you use, and it will give you a recommend content of `.gitignore` file.

You also can use command line to search in gitignore.io use the api they provide, just add a function `gi` to your enviroment file (.bashrc or .zshrc or anything you use)

{% highlight bash %}
function gi() {
  curl -o .gitignore http://www.gitignore.io/api/$@
}
{% endhighlight %}

and use it, for example on a go project:

{% highlight bash %}
gi go
{% endhighlight %}

enjoy.
