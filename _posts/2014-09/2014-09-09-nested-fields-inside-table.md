---
layout: post
title: Nested fields inside table
tagline: with fields_for
tags: rails
category: stephen
author: stephen
date: 2014-09-09 13:00
---
Render nested fields inside a table,  say have code

{% highlight erb %}
<table>
  <%= f.fields_for :tasks do |task_form| %>
    <tr class="fields">
      <td>
        <%= task_form.text_field :name %>
      </td>
      <td><%= task_form.link_to_remove 'Remove' %></td>
    </tr>
  <% end %>
  <tr>
    <td><%= f.link_to_add 'Add', :tasks %></td>
  </tr>
</table>
{% endhighlight %}

After render, outside each tr there will a additional hidden field with value of task id, Rails add  f.hidden_field(:id) after the rendered field_for block. In order to make this hidden field inside each tr, we can pass option `include_id: false` to `fields_for`, and add hidden id field manually, so now our code becomes

{% highlight erb %}
<table>
  <%= f.fields_for :tasks, :include_id => false do |task_form| %>
    <tr class="fields">
      <td>
        <%= task_form.hidden_field :id %>
        <%= task_form.text_field :name %>
      </td>
      <td><%= task_form.link_to_remove 'Remove' %></td>
    </tr>
  <% end %>
  <tr>
    <td><%= f.link_to_add 'Add', :tasks %></td>
  </tr>
</table>
{% endhighlight %}

it's much better.

ref <http://apidock.com/rails/ActionView/Helpers/FormBuilder/fields_for_nested_model>
