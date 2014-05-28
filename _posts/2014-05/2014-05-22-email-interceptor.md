---
layout: post
title:  Email interceptor
tagline: to avoid spamming customers when coding
tags: rails devtool
category: ihower
---
This is a tip from iHower : In KB/OA/iSIS, we have a trick to intercept outbound email at non-production environment, so we can make sure we will never send test email to real customers.

The key is a Rails API called `ActionMailer::Base.register_interceptor `and `delivering_email` method (since Rails 3.0.9). Basically it's a hook that you can modify subject and address.

{% highlight ruby %}
# in config/initializers/email.rb
DevelopmentMailInterceptor.init_if_needed!
{% endhighlight %}

{% highlight ruby %}
# in app/services/development_mail_interceptor.rb
class DevelopmentMailInterceptor
  def self.init_if_needed!
    if self.should_initialize?
      ActionMailer::Base.register_interceptor(self)
    end
  end

  def self.should_initialize?
    Rails.env.staging? || Rails.env.development? || Rails.env.sandbox?
  end

  def self.should_intercept? (recipient)
    if ["@mydomain.com", "@internal.com"].find { |x| recipient.end_with?(x) }
      false
    else
      !(Admin.find_by_email(recipient).present?)
    end
  end

  def self.delivering_email(message)
    process = lambda { |getter, setter, placeholder = []|
      addresses = (message.send(getter) || [])
      message["X-Intended-#{ getter.to_s.titleize }"] = addresses.join(", ")
      message.send(setter, (placeholder + addresses.reject { |x| should_intercept?(x) }))
    }
    process.call(:to, :to=, ["devteam@mydomain.com"])
    process.call(:cc, :cc=)
    process.call(:bcc, :bcc=)
    message
  end
end
{% endhighlight %}
