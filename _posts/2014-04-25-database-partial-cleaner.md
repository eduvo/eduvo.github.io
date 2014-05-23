---
layout: post
title:  Database partial cleaner
tagline: for faster tests
tags: rails4 rspec testing
---
On Rails 4 side, I would like to share the code which helps to speed up the tests and resolves the test DB initialization issue. Before running a test, there is the test DB setup action, which clears all tables. But if your test modifies only several tables, it is much better to clear and populate only these tables vs all.

There is a gem for that: https://github.com/bmabey/database_cleaner, which we use and the examples below are related to it.

To find the tables which got some data after the previous test, the next code can be used:

{% highlight ruby %}
strategy = DatabaseCleaner.connections.first.strategy
connection = strategy.connection_class.connection
db_name = connection.current_database
only = connection.execute("select table_name from information_schema.tables where table_rows >= 1 and `TABLE_SCHEMA` = '#{db_name}';").to_a.flatten
strategy.instance_variable_set("@only".to_sym, ['schools'] + only.reject { |x| x.to_s == ActiveRecord::Migrator.schema_migrations_table_name })
{% endhighlight %}

Thanks to `@only` variable, the cleaner will omit the tables which do not have data. Also, we should never drop schema_migrations table, which is reflected in the reject statement.

However, the above code has one problem - the query may lie to us sometimes, because table_rows value may be inconsistent with the actual table content. To be 100% safe, we need to narrow the optimization to the following code (`spec/support/database_cleaner.rb`):

{% highlight ruby %}
RSpec.configure do |config|
  config.before :suite do
    DatabaseCleaner.clean_with :truncation
  end

  config.before do
    if example.metadata[:js]
      DatabaseCleaner.strategy = :truncation, { :pre_count => true, :reset_ids => false }
    else
      DatabaseCleaner.strategy = :transaction
    end

    DatabaseCleaner.start
  end

  config.after do
    DatabaseCleaner.clean
  end
end
{% endhighlight %}

We use `:truncation` for JS tests cleanup, because they may run in parallel, and `:transaction` is not recommended for the multiple connections case. :pre_count option is used to ensure that we truncate only the tables which have data.

The above gem and this custom configuration improves the tests running time ~2x for us.

Roman
