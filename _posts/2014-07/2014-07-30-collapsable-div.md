---
layout: post
title: collapsable div
tagline: according to the width of container
tags: css
category: oliver
date: 2014-07-30 13:00
---
This trick can detect if the content is wider than the container and it will display a icon if the container is too narrow, so you can click on the icon to expand.

The main thing is to use `{ text-align: justify }` and set the `.mask `element width to 1px and give it a higher `z-index` to cover the icon. When the `.content` width is full of the container({max-width: 100%}) the mask would wrap to the second line. Then the icon shows up, then you can click on the icon to show the second line.

<p data-height="235" data-theme-id="0" data-slug-hash="vbour" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/vbour/'>vbour</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
