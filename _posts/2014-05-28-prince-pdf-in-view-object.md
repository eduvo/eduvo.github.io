---
layout: post
title:  Prince PDF in view object
tagline: with a doubt ...
tags: rails pdf
category: ilake
date: 2014-05-28 18:35
---
The [princely gem][1] (from princexml) is convenient to generate pdf out of a controller, because we have a view object and I want the pdf generation to bind to it.


{% highlight ruby %}
# lib/princely_pdf.rb
module PrincelyPdf
  extend ActiveSupport::Concern

  included do
    include ActionController::Rendering
    include Princely::PdfHelper
    include Princely::AssetSupport
  end

  def build_pdf_data(options = {})
    options = {
      :stylesheets => [],
      :layout => false,
      :relative_paths => true,
      :server_flag => true
    }.merge(options)

    prince = Princely::Pdf.new(options.slice(:server_flag))
    # Sets style sheets on PDF renderer
    prince.add_style_sheets(*options[:stylesheets].collect{|style| asset_file_path(style)})

    html_string = render_to_string(options.slice(:template, :layout, :handlers, :formats))

    html_string = localize_html_string(html_string, Rails.public_path) if options[:relative_paths]

    prince.pdf_from_string(html_string)
  end

  def pdf_file(options = {})
    @pdf_file ||= begin
                    options[:pdf_file_data] ||= build_pdf_data(options).force_encoding('utf-8')
                    options[:filename] ||= "report"

                    report_temp_file = Tempfile.new([ options[:filename], '.pdf' ])
                    report_temp_file.write(options[:pdf_file_data])
                    report_temp_file.rewind
                    report_temp_file
                  end
  end

  def render_to_string(options = {})
    raise 'overwrite me'
  end
end
{% endhighlight %}

{% highlight ruby %}
# view object
require 'princely_pdf'

class StudentTranscript
  include PrincelyPdf

  def render_to_string(options = {})
    av = ActionView::Base.new(ActionController::Base.view_paths)
    av.extend TranslationHelper
    av.render(:template => "contacts/transcripts/index.pdf.erb",
              :layout => options[:layout],
              :locals => {
                          :@school => SchoolDecorator.new(school),
                          :@student => StudentProfilePresenter.new(student)
                         })
  end
end
{% endhighlight %}


But I feel bad smell here, because we just use the template in this view object, that is fine. But if we need this template both  from view object and controller, that may violate the DRY policy. I feed that it could be dangerous, because you probably can forget to add some variables in the other place, Anyone have better idea ? (send to <a href="mailtodevtips@faria.co">devtips at faria.co</a>)

[1]: https://github.com/mbleigh/princely
