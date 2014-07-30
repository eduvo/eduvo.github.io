---
layout: post
title: Gist in Sublimetext
tagline: with the gist plugin
tags: sublimetext
category: johnny
date: 2014-07-30 12:00
---
[Gist](https://gist.github.com) is a service provided by Github for publishing notes, and it supports version control. You can create your own or fork from others a little bit like for Github Repos. I found a plugin for inserting gist in my page inside Sublimetext.

(note, you need to have the [Package Control](https://sublime.wbond.net/) installed)

- `cmd-shift-P`: select Package Control: Install Package
- Search Gist and install
- Goto GitHub setting to [generate access token](https://github.com/settings/applications#personal-access-tokens)
- copy the token and add it in your gist plugin pref:
  - Preferences > Packages Settings > Gist > Settings - User
  - and add
{% highlight json %}
{
  "token": "xxxx"
}
{% endhighlight %}

Whenever you want to insert a snippet from a gist in your current file

- `cmd-shift-P` Gist: Insert Gist
- or `cmd-k cmd-]`
- it will open a list of your gists and you can select the one you want
