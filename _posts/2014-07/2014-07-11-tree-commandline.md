---
layout: post
title: Tree command
tagline: as a better ls
tags: console
category: mose
date: 2014-07-11 12:30
---
There is a shell tool that I install systematically on any new machine/server, it's `tree`.

    apt-get install tree

or

    brew install tree

Its very basic usage is to show the content of a dir in an arborescent way, and there are a lot of options. It can be a good alternative to `find` sometimes. But I mostly use it for having a quick overview of the content of a dir.

{% highlight bash %}
mose@momac > ~ > tree projects/lolita
projects/lolita
├── Gemfile
├── Gemfile.lock
├── README.md
├── config.default.yml
├── config.yml
├── lita-faria
│   ├── Gemfile
│   ├── LICENSE
│   ├── README.md
│   ├── Rakefile
│   ├── lib
│   │   ├── lita
│   │   │   └── handlers
│   │   │       └── faria.rb
│   │   └── lita-faria.rb
│   ├── lita-faria.gemspec
│   └── spec
│       ├── lita
│       │   └── handlers
│       │       └── faria_spec.rb
│       └── spec_helper.rb
├── lita_config.rb
├── log
└── tmp

9 directories, 15 files
{% endhighlight %}

Some options:

{% highlight bash %}
mose@momac > ~ > tree projects/lolita -hfih -I 'spec|lib' --du
projects/lolita
[ 164]  projects/lolita/Gemfile
[1.2K]  projects/lolita/Gemfile.lock
[1.2K]  projects/lolita/README.md
[ 177]  projects/lolita/config.default.yml
[ 222]  projects/lolita/config.yml
[2.6K]  projects/lolita/lita-faria
[  39]  projects/lolita/lita-faria/Gemfile
[1.0K]  projects/lolita/lita-faria/LICENSE
[ 357]  projects/lolita/lita-faria/README.md
[ 117]  projects/lolita/lita-faria/Rakefile
[ 769]  projects/lolita/lita-faria/lita-faria.gemspec
[1.2K]  projects/lolita/lita_config.rb
[ 102]  projects/lolita/log
[ 102]  projects/lolita/tmp

 7.4K used in 3 directories, 11 files
{% endhighlight %}

`man tree` for more (but the basic tree view is the real deal, for more detailled listings, `find` is better).
