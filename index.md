---
layout: page
title: Tips for the devs
tagline: ... directly from the Faria cave
---
{% include JB/setup %}

<ul class="posts-list">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }} - </span><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

