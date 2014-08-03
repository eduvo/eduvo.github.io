---
layout: post
title:  Knife remote command
tagline: when working with chef-server
tags: chef knife devops
category: mose
author: mose
date: 2014-06-26 13:50
---
Recntly we switched from chef-solo to a chef-server setup on our infrastructure, a good occasion to refactor our recipes to better practices. I spent some time figuring out how to replace the `fabric` scripts I had for remote execution of actions on various servers, by using a knife plugin. That way I can just use knife abilities and don't need fabric anymore.

So I created a new file in `.chef/plugins/knife/` named `apt.rb` for a test:

{% highlight ruby %}
require 'chef/knife'

module KnifeOpenvpn
  class Apt < Chef::Knife

    banner "knife apt <update|upgrade|simulate> <nodename>"

    deps do
      require 'chef/knife/ssh'
      require 'chef/node'
      Chef::Knife::Ssh.load_deps
    end

    def run
      if name_args.size == 2
        command_arg = name_args.shift
        server = name_args.shift
      else
        ui.fatal "Syntax: knife apt <update|upgrade|simulate> <nodename>"
        ui.fatal "Where <nodename> is a node name."
        exit 1
      end
      command = case command_arg
                when 'update'
                  'update'
                when 'upgrade'
                  '-y upgrade'
                when 'simulate'
                  '-y -s upgrade'
                end
      knife_ssh(Chef::Node.load(server).ipaddress, "sudo apt-get #{command}").run
    end

    def knife_ssh(server, command)
      ssh = Chef::Knife::Ssh.new
      ssh.name_args = [ server, command ]
      ssh.config[:ssh_user] = Chef::Config[:knife][:ssh_user]
      ssh.config[:ssh_port] = Chef::Config[:knife][:ssh_port]
      ssh.config[:identity_file] = Chef::Config[:knife][:identity_file]
      ssh.config[:ssh_gateway] = Chef::Config[:knife][:ssh_gateway]
      ssh.config[:manual] = true
      ssh.config[:host_key_verify] = Chef::Config[:knife][:host_key_verify]
      ssh.config[:on_error] = :raise
      ssh
    end

  end

end
{% endhighlight %}

Then I just run a `knife apt simulate my-server` to execute a `apt-get -s -y upgrade` on the `my-server` client node. Pretty useful. But I guess that's only a beginning, I should extend it to run on various nodes at the same time and maybe inside threads or something like that, to match the `fabric` power.
