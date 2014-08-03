---
layout: post
title: Git remerge
tagline: again a feature branch
tags: git
category: roman
author: roman
date: 2014-07-15 10:30
---
Here is the tip about messing with the wrongly merged feature branches in git.

Suppose you have the branch `my_cool_feature`, and two other branches `staging` for the deploys to the test server and `master` for production deploys.

Suddenly, you make a mistake and merge your feature branch into master instead of the staging. Then you revert the merge commit, of course, and merge the feature to the staging. It gets reviewed there, and can go to prod, but the problem is that you cannot merge the feature branch into master again. It's already up-to-date.

That said, master has all the commits from your feature branch, and it also has the revert of those. To get the changes there again, you can do the interactive rebase on your feature branch:

    git rebase --interactive revision

Then we pick the first feature commit and squash all other commits into it:

    p commit1
    s commit2
    ...
    s commitN

The result of this operation is the new commit, which can be merged into master, and all the feature changes will be there again.
