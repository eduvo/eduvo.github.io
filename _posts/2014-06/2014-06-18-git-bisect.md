---
layout: post
title:  Git bisect
tagline: to track where it broke
tags: git
category: stephen
date: 2014-06-18 12:30
---
Sometimes when the codebase is broken and you are sure it is working perfectly fine on a certain commit, then it's time git bisect comes into place.

You start the bisect by:

    git bisect start
    git bisect good <COMMIT-SHA>
    git bisect bad <COMMIT-SHA>

Once you specify GOOD and BAD commit for git bisect, it will checkout the central commit for you.

You then test the code and input the result for your testing:

    git bisect bad # (or good)

Keep doing this and you will finally get the corrupted commit! That's it.

Last thing, remember to exit the bisect mode after you finish by:

    git bisect reset
