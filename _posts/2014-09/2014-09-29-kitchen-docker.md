---
layout: post
title: Kitchen docker
tagline: for fast chef tests
tags: devops chef
category: ming
author: ming
date: 2014-09-29 06:00
---
Test Kitchen is a tool for you to test code and software in an isolated target
platforms. They could be a VM (default), docker, lxc-container, or even a VPS
in the clouds, such as Azure, Blue Box, Amazon EC2, Rackspace, DigitalOcean,
OpenStack, etc. Many test frameworks are support, such as Rspec, Bats, shUnit2,
and Serverspec in the kitchen.

Here I want to introduce you how to setup a docker driver for kitchen instead of
default one using Vagrant. It may cut to a dramatical short of the time of your
testing cycles.

Step 1. Prepare a system or VM with docker and kitchen installed.


    $ kitchen login
    Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-32-generic x86_64)

     * Documentation:  https://help.ubuntu.com/
    Last login: Fri Sep 19 06:40:45 2014 from 10.0.2.2
    vagrant@cheftraining:~$ ls
    vagrant@cheftraining:~$ docker -v
    Docker version 1.2.0, build fa7b24f
    vagrant@cheftraining:~$ kitchen -v
    Test Kitchen version 1.2.1
    vagrant@cheftraining:~$

Step 2. Create a kitchen with docker driver

    $ kitchen init --driver=kitchen-docker --create-gemfile

Step 3. Edit .kitchen.yml as follow

    ---
    driver:
      name: docker

    provisioner:
      name: chef_solo

    platforms:
      - name: ubuntu-14.04

    suites:
      - name: default
        run_list:
        attributes:

Step 4. Bundle install to fetch any new gem, and then, create an instance.

    $ bundle install
    $ kitchen create

Step 5. Check current instances, which ready for your provisioning.

    $ kitchen list
    Instance             Driver  Provisioner  Last Action
    default-ubuntu-1404  Docker  ChefSolo     Created

Now, you can add cookbook recipes for testing with kitchen. You can find it is
much much faster to create an instance after docker images are created. It only
took me 0.76s to create new an instance, compared with vagrant to create a VM in
minutes.

If you want to know what else drivers you can use for kitchen beside docker and
vagrant? Just type:

    $ kitchen driver discover
