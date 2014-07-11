---
layout: post
title: Fixed table layout
tagline: to keep things under control
tags: css frontend
category: oliver
date: 2014-07-09 17:30
---
Table layout dynamically changes width according to its content. But it loses control if the width of the content is wider than the table column even if you give the table a fixed width or max-width property. The `{table-layout: fixed;}` solves this problem well.

Set `{table-layout: fixed}` to the table and give percentage width to td and th. Then we can still keep the dynamic width. The table width is no more expanded and `{overflow: hidden}` works well to td too.

<p data-height="218" data-theme-id="0" data-slug-hash="AcuKa" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/AcuKa/'>AcuKa</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
