---
layout: post
title:  Footer in PrinceXml PDF
tagline: with some touch of css
tags: princexml
category: roman
date: 2014-06-19 02:50
---
In this tip, we are going to add a custom footer to a PDF document, generated using Prince XML. Suppose we want to have a school name and logo in the left bottom corner, and a page number in the right bottom corner. We need to include the next CSS which declares it:

{% highlight css %}
@page{
  @bottom-right {
    content: flow(right-footer-data);
    white-space: nowrap;
  }

  @bottom-left {
    content: flow(footer-data);
    white-space: pre-line;
  }
}

.footer-data {
  flow: static(footer-data)
}

.right-footer-data {
  flow: static(right-footer-data)
}
{% endhighlight %}

As you can see, two footers are declared: `footer-data` is the left one, and `right-footer-data` is the right one. Then in the template we write within the first page body:

{% highlight haml %}
%div.page{ :style => 'page: portrait;' }
  .footer-data
    = image_tag path_to_school_logo
    My Cool School Name
  .right-footer-data
    .fr
      %span{ :style => 'content: "Page " counter(page) " of " counter(pages);' }
{% endhighlight %}

This footer will appear on every page, counting the pages automatically.
