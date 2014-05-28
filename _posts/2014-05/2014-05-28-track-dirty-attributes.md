---
layout: post
title:  Track dirty attributes
tagline: from an arbitrary model
tags: rails activerecord
category: ihower
date: 2014-05-28 20:10
---
`ActiveRecord::Dirty` feature provides a way to track changes in your object. But how do we add support for an arbitrary attribute?

For example in KB, organization's custom data (i.e. MB/OA/iSIS subdomains) does not belong to Organization model, it belongs to another custom FieldStringValue model. And I want to have `Organization#custom_fields_changed?`, `Organization.changes`... etc "dirty" methods.

The key Rails API is `attribute_will_change!(attr)`. If custom fields are changed, it will call attribute_will_change!('custom_fields') that tell Rails.

- <http://apidock.com/rails/ActiveModel/Dirty>
- <http://apidock.com/rails/ActiveModel/Dirty/attribute_will_change%21>
