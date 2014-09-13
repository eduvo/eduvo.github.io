---
layout: post
title: Photoshop layers
tagline: for productive designer
tags: photoshop
category: naiting
author: naiting
date: 2014-09-12 11:00
---
Some basic shortcuts
----------------------

--|--
**arrangement** |
`cmd + [`                      | send backward
`cmd + ]`                      | send forward
`cmd + shift + [`              | send to back
`cmd + shift + ]`              | send to front
`option + [`                   | select previous visible layer, add `shift` to multi-select
`option + ]`                   | select next visible layer, add `shift` to multi-select
`cmd + g`                      | group
`cmd + shift + g`              | ungroup
**create layer** |
`cmd + option + shift + n`     | create a new layer without confirm
`cmd + j`                      | duplicate layers / groups
`cmd + shift + j`              | cut selection to a new layer
`cmd + e`                      | merge selected layer / group, add `shift` to merge all,  add `option` to get the merged result on a new layer (stamp)
**other** |
`cmd + option + g`             |  toggle clipping mask
`cmd + delete`                 | fill with background color
`option + delete`              | fill with foreground color
`/`                            | lock layer / group
`0 ~ 9`                        | change opacity of layer / group
`shift + 0 ~ 9`                | change layer's fill opacity

Try to arrange the groups and layers like html dom, the front-end developers will love you.

Some tricks
---------------

### Remove background
If you want to remove the background of a jpg, when you open it, the transparency is locked by default.

![photoshop 1](/assets/images/2014-09-12-photoshop1.png)

To unlock it, you can press `option` and double click the lock icon. Otherwise, If you prefer an alternative way without using mouse, you can `cmd + j` (copy the current layer), `option + [` (select the background layer), and `delete` it.

### Copy layer, but no 'copy #'
It was annoying me. You can find the setting in "Panel Options..." in the popup menu
there is a checkbox - Add “copy” to Copied Layers and Groups

![photoshop 2](/assets/images/2014-09-12-photoshop2.png)

### Rename layer / group
This function has no shortcut, but we can customize it ourself. Open the preference by `cmd + option + shift + k` and find Layer > Rename Layer..., I set `cmd + ctrl + n` for it.

![photoshop 3](/assets/images/2014-09-12-photoshop3.png)


Tools
------------------

### Export
I recommend Slicy <http://macrabbit.com/slicy>, a powerful tool to convert .psd to .png, .jpg, .icns, although it's not fresh.

### Advanced
for the advanced designers, I recommend Sketch <http://bohemiancoding.com/sketch>. This is better than photoshop or illustrator in some features.

