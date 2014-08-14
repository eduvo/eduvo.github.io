---
layout: post
title: Center Element
tagline: using css
tags: css
category: oliver
author: oliver
date: 2014-08-12 06:00
---

I want to share an interesting way to center element of the whole window with css. 

1. First, give the wrapper a padding property 50 viewport height:

	{ padding: 50vh; } 

and adjust the position of the content element:

	{position: absolute; left: 50%; top: 50%;}

2. Then the content would start its position at the center of the window and grows to right side and down. 

3. The final step is give content element a offset transform style:

	{ transform: translate(-50%, -50%)}

You would get a perfect window centered element! Chekout the demo below and the browser support [here][1].

Demo:

<p data-height="392" data-theme-id="0" data-slug-hash="ajKFm" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/ajKFm/'>ajKFm</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

[1]: http://caniuse.com/viewport-units