---
layout: post
title:  SSH to socket
tagline: "open once, use forever"
tags: console ssh
category: mose
author: mose
---
Mose uses a special trick because he's often ssh'ing all over the place. Add in your `.ssh/config`

    Host *
      ControlMaster auto
      ControlPath /tmp/%r@%h:%p

It will save your first connection to a host as a socket in `/tmp` and then all subsequent ssh connections to the same host are open instantly because there is no key renegotiation on the way. The side effect is that the child-connections cannot be closed until the first one closes, but I find it convenient because it tells me that I still have a console open on the server that I should close.
