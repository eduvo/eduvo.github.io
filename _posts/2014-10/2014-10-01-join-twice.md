---
layout: post
title: Join twice
tagline: the same table
tags: rails sql
category: ilake
author: ilake
date: 2014-10-01 16:00
---
Sometimes we need to join the same table twice, for example

{% highlight ruby %}
# Table name: attendances
#
#  student_id          :integer
#  teacher_id          :integer
#  status              :string

class Attendance < ActiveRecord::Base
  belongs_to :student
  belongs_to :teacher
end

class Student < User
end

class Teacher < User
end
{% endhighlight %}

Then you could use *as* to rename the query table name to join same table twice.

{% highlight ruby %}
Attendances.
   joins("join users as students on attendances.student_id = students.id
          join users as teachers on attendances.teacher_id = teachers.id")
{% endhighlight %}
