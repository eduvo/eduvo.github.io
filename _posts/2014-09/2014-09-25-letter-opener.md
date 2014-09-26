---
layout: post
title: Letter opener
tagline: in a rails engine
tags: rails
category: johnny
author: johnny
date: 2014-09-25 18:00
---
We can use letter_opener <https://github.com/ryanb/letter_opener> to open up the email we sent in browser while we are developing. But when we are testing for sending out dozens of emails, opening up so much tab is not a good thing.

Letter_opener_web <https://github.com/fgrehm/letter_opener_web> provides a web app for you to view all the emails sent in one place.

    # in Gemfile
    gem 'letter_opener_web'

    # in environments/development.rb
    config.action_mailer.delivery_method = :letter_opener_web

    # in routes.rb
    if Rails.env.development?
      mount LetterOpenerWeb::Engine, at: "/letter_opener"
    end

Then visit <http://localhost:3000/letter_opener>, we will see your mails!

The author also provide a demo site for his gem, check it out <http://letter-opener-web.herokuapp.com/>


