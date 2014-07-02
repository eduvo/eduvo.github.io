---
layout: post
title:  Analytics in Elasticsearch
tagline: to track long tests
tags: elasticsearch rails
category: ilake
date: 2014-07-02 20:00
---
You are wrong if your think elasticsearch could only be useful for your search feature. It also pretty good in analytics. It can help for some aggregation, like min, avg or percentiles etc...

For example, We have a students grades and we hope to do some analytics for specific subject in a school.
Below is how we did it.

{% highlight ruby %}
# establish a elasticsearch client
Client = Elasticsearch::Client.new host: 'localhost:9200'

response = Client.search :index => student_grades,
  :body => {
   :query => {
      "query_string" => {
         # find the grades in school 9527 and subject_group is mathematics
         "query" => %| school_id:9527 AND subject_group:'mathematics' |
      }
    },
    :aggs => {
      :grade_stats => {
        "stats" => {
          "field" => "grade"
        }
      },
      :grade_outlier => {
        "percentiles" => {
          "field" => "grade",
          "percents" => [25, 50, 75]
        }
      },
     :grade => {
        "terms" => {
          "field" => "grade"
        }
      }
    }
  }

 # That will be easy for access
 Hashie::Mash.new response
{% endhighlight %}

And then this is what we get, grade terms, percentiles for 25%, 50% and 75% and avg, max, sum, etc.
And what make it more awesome, it is crazy, crazy fast.
It supports more options for aggregation. If you want to build anything related to analytics you should give it a try.

{% highlight ruby %}
 ...
 "aggregations"=>
  {"grade"=>
    {"buckets"=>
      [{"key"=>4, "doc_count"=>13},
       {"key"=>5, "doc_count"=>12},
       {"key"=>6, "doc_count"=>5},
       {"key"=>3, "doc_count"=>4},
       {"key"=>7, "doc_count"=>4},
       {"key"=>2, "doc_count"=>2}]},
   "grade_outlier"=>{"25.0"=>4.0, "50.0"=>5.0, "75.0"=>5.0},
   "grade_stats"=>
    {"count"=>40, "min"=>2.0, "max"=>7.0, "avg"=>4.65, "sum"=>186.0}}}
{% endhighlight %}


Note: My elasticsearch version is 1.1.1, 1.0.X don't support Aggregation feature. Facets will be deprecated in the future.

### References

- [Elasticserch aggregation](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations.html)
- [Elasticsearch ruby](https://github.com/elasticsearch/elasticsearch-ruby)
