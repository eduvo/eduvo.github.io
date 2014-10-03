---
layout: post
title: Keydown event
tagline: on input fields
tags: javascript
category: oliver
author: oliver
date: 2014-10-01 18:10
---
Sometimes we need to get the input’s value when the keydown event is triggered.

But we will see the text we type and the result we get is not displayed immediately.

So we can add `setTimeout` or `defer` function to postpone the function to the last of current call stack.
Then we can get a consistent result with what we type in the input real time. The value of the input will be already modified with the type key at the time the function is called.

Here’s a simple example <http://codepen.io/Oliverl/pen/HwhIp>

<p data-height="134" data-theme-id="0" data-slug-hash="HwhIp" data-default-tab="result" data-user="Oliverl" class='codepen'>See the Pen <a href='http://codepen.io/Oliverl/pen/HwhIp/'>HwhIp</a> by Oliver - Frontend Developer (<a href='http://codepen.io/Oliverl'>@Oliverl</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
