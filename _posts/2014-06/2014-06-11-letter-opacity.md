---
layout: post
title:  Letter opacity
tagline: because webkit is weird sometimes
tags: css
category: naiting
date: 2014-06-11 12:40
---
There is a bug about opacity in webkit-based browsers, when using specific font family that have variable size or [decorative swashes][1] (eg. Zapfino)

If you apply opacity by following way, the first letter will be cut.

`opacity: 0.5`

To avoid that, you can use rgba color

`color: grba($color, .5)`

See for example:

<p data-height="520" data-theme-id="0" data-slug-hash="pmjdh" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/sliiice/pen/pmjdh/'>pmjdh</a> by naiting (<a href='http://codepen.io/sliiice'>@sliiice</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

[1]: https://en.wikipedia.org/wiki/Swash_(typography)
