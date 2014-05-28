---
layout: post
title:  View Objects
tagline: for a cleaner code in controllers
tags: rails refactoring
category: aaronk
---
AaronK wants to detail a bit on what he learned about Models. it may be a bit long but hang on.
Even we already know the patterns about how to refactor model from this article:

<http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/>

Here's a very useful concepts I learned when using view/form object patterns:

We should rather use the characteristic of encapsulation to place the related data into model (view/form object), rather than controller or view (template)

### Background

Here's a simple example of code we often use.

{% highlight ruby %}
    # in controller
    def edit
      @student = current_school.students.find(params[:id])
    end

    def update
      @student = current_school.students.find(params[:id])
      if @student.update_attributes(student_params)
        redirect_to student_path(@student)
      else
        render :edit
      end
    end

    # in students/edit.html.erb
    render 'form'

    # in students/_form.html.erb
    <%= simple_form for(@student) do |f| %>
      <%= f.input :first_name %>
      <%= f.submit %>
    <% end %>
{% endhighlight %}


### The problem is...

One day, the student form needs some extra options, ex: grades. Another developer was asked to patch this requirement, who may add the data to:

{% highlight ruby %}
    def edit
      @student = current_school.students.find(params[:id])
      @grades = current_school.grades.enabled
    end

    Then put the options into the form partial file
    <%= simple_form for(@student) do |f| %>
      <%= f.input :first_name %>
      <%= f.input :grade_id, :collection => @grades %>
      <%= f.submit %>
    <% end %>
{% endhighlight %}

Everything seems going right, user can edit student with grades happily.

But often we miss the bad case. When saving failed, the update action would go to render edit view, but the form partial wasn't allocated instance variable of @grades, and boom, it causes a server error. Unfortunately, it's hard to track where a partial is used in what controller method.


### How we avoid it by using FormObject

Thats why we need to use form object, we should encapsulate the data into the object.

{% highlight ruby %}
    def edit
      student = current_school.students.find(params[:id])
      @form = StudentForm.new(student)
    end

    def update
      student = current_school.students.find(params[:id])
      @form = StudentForm.new(student)
      @form.attributes = student_params
      if @form.save
        redirect_to student_path(student)
      else
        render :edit
      end
    end
{% endhighlight %}

then we should put the grade options in StudentForm, such as

{% highlight ruby %}
    class StudentForm
      attr_reader :grade_options
      def initialize(student)
      @student = student
      @grade_options = student.school.grades.enabled
      end
    end

    # students/_form.html.erb
    <%= simple_form for(@form) do |f| %>
      <%= f.input :first_name %>
      <%= f.input :grade_id, :collection => @form.grade_options %>
      <%= f.submit %>
    <% end %>
{% endhighlight %}

Furthermore, we could make the object become renderable, just extend ActiveModel::Naming or use custom partial path by implementing the method 'to_partial_path', such as:

{% highlight ruby %}
    class StudentForm
      def to_partial_path
        'students/form'
      end
    end

    # in edit.html.erb
    <%= render @form %>

    # in students/_form.html.erb
    <%= simple_form for(form) do |f| %>
      <%= f.input :first_name %>
      <%= f.input :grade_id, :collection => form.grade_options %>
      <%= f.submit %>

      <%# notice: the 'form' became local variable. %>
    <% end %>
{% endhighlight %}

Then all the variables used in the partial should come from the form object.

### Similar problem when generaly using partial

And it is a similar concept when using view object, many times we share the partial between views, but each one didn't know what data along the partial be shared with.
Often we update the partial for patching page A but beak Page B because that is used by a different controller (because we place the data at the action as instance variables!!)

### Conclusion

- One action, one model, no more instance variables except the major object under the action.
- Treat the target we are rendering as a object, not just a view file.
- AaronK should write more blog posts
