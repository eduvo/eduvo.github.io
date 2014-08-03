---
layout: post
title:  Codemirror for mail templates
tagline: and limit user errors
tags: javascript codemirror
category: stephen
author: stephen
date: 2014-06-05 15:40
---
[Last time][1] I talked about `codemirror.js`, but you may still don’t see clearly what it can help with. Here is more about how I use it.

**Problem:**
User can edit email template body by their own. We allow them to use variables, for example `{% raw %}{{applicant_name}}{% endraw %}`. It will be replaced to real applicant name before sending out. The problem is, this kind of tag make user feel confused and it's very easy to make a mistype those.

**Solution:**
We use code mirror to create our own syntax highlight, make the variable part un-editable, so people know this is variable. Because they cannot be edited, the user never makes mistake again while create variable tag.

![Variable highlight](/assets/images/2014-06-05-codemirror.png)

The trick here is to use, in the coffeescript file

{% highlight coffeescript %}
editor = CodeMirror.fromTextArea(document.getElementById(@id), {
  lineNumbers: false,
  dragDrop: false,
  theme: 'oa'
});

editor.markText(
  cursorPosition,
  {line:cursorPosition.line,ch:cursorPosition.ch + text.length},
  {
    className: 'variable',
    atomic: true,
  }
)
{% endhighlight %}


You can check more about `markText` in the API doc at <http://codemirror.net/doc/manual.html#api>

[1]: /2014-05-28-codemirror.html
