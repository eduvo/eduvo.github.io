---
layout: post
title:  Recover mysql data
tagline: from dumps
tags: rails mysql
category: roman
---
Here is some tips from Roman. Broken data recovery is a common thing to do these days, either because users delete their stuff by accident, or the code breaks and writes wrong data to the system. We can classify all recovery tasks as:

1. A full DB row recovery, usually happens when records are deleted by mistake.
2. An attribute recovery, when only some attributes of a record are broken.

The first case is easier than the second. To recover full rows, we open the appropriate DB dump in Sequel Pro, prepare a query to select the rows which need to be recovered in the current DB, and then copy them as SQL INSERT, which is a nice and useful context menu option in that tool. The result should be run on production DB, and the recovery is done.

The second case requires writing some SQL to prepare the recovery statements. The magic looks like this:

    SELECT CONCAT('update users set homeroom_advisor_id = ', homeroom_advisor_id, ' where id = ', id, ';') FROM users WHERE id in (3443,4332,5523)

This yields

    update users set homeroom_advisor_id = 4673 where id = 3443;
    update users set homeroom_advisor_id = 4380 where id = 4332;
    update users set homeroom_advisor_id = 4616 where id = 5523;

which is nice, but what if somebody updated the advisor ID from NULL to something other meanwhile? We need to add the check:

    SELECT CONCAT('update users set homeroom_advisor_id = ', homeroom_advisor_id, ' where id = ', id, ' and homeroom_advisor_id is null;') FROM users WHERE id in (3443,4332,5523)

The result:

    update users set homeroom_advisor_id = 4673 where id = 3443 and homeroom_advisor_id is null;
    update users set homeroom_advisor_id = 4380 where id = 4332 and homeroom_advisor_id is null;
    update users set homeroom_advisor_id = 4616 where id = 5523 and homeroom_advisor_id is null;

is the query which can be used to restore the wrongly nullified attributes.

