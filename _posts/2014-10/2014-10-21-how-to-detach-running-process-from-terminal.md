---
layout: post
title: How to detach a process
tagline: from terminal
tags: console bash
category: anna
author: anna
date: 2014-10-21 12:56
---

Sometimes there is a need to start a long running job on a remote server
via ssh. In the case you forgot to use tmux or screen, the job on
remote server will be automatically killed as soon as you close the
terminal.

To avoid the process it being killed after your ssh session is over, you
can detach it from the shell. In this case the job will remain running
after you disconnect from the server.

In order to do this, first make sure that the job is running in
background and then type disown. Disown will guarantee that SIGHUP
signal will not be sent to the process, hence the process remains running.

Here is a short example:

    # start your script that runs in foreground
    $ ./myscript.sh
    my script output
    my script output

    # press Ctrl+z to interrupt it
    ^Z
    [1]+  Stopped                 ./myscript.sh

    # make sure it runs in background by typing bg
    $ bg
    [1]+ ./myscript.sh &

    # now type disown followed by job number. In our case it is number 1
    $ disown %1

Now you can disconnect from the server without interrupting your process.
