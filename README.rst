========================
Django On Wings (DJOW)
========================

A project template for Django 1.8 (see tag django-1.7 for Django 1.7 support and django-1.6 for Django 1.6 support)

A very first note
=================
This project is a mixture of django-twoscoops-project and pinax account project with a mixture of own stuff. I created it
for my own purposes but feel free to use it, fork it, change it the way you want.

Prehistory
==========
I love Django, but I noticed that one of the most frustrating moments while working with Django is setting up a new project.
In most cases you just repeat yourself million times: you get a bootstrap template, set up less, user account management system,
caching, thumbnail manipulation, backups, etc.

I just got tired of repeating this process, so I decided to create a starting template that prepares a good starting point
for my own projects. After using django-twoscoops-project and pinax on different apps I decided to take the best from them
both and create this starting template calling it "Django on Wings" ;)

What's inside?
==============
DJOW is based on Pinax account template merged with Two Scoops Of Django project template.
It is compatible with Pinax and should work ok with templates made for it.

DJOW includes:

* HTML5 base template powered by bootstrap
* CSS as SASS
* SASS compilation managed by gulp
* Preconfigured Accounts powered by Django Accounts
* Custom User app to have custom user model out of the box installed, tuned and ready for futher customizations
* Custom Comments app to have custom comments model out of the box installed, tuned and ready for futher customizations
* Site cache backed by Redis Cache
* Clear cache functionality (you can flush cache from the command line)
* Database and site media backups to FTP / S3 powered by Django DBBackups
* Thumbnails manipulation functionality powered by Sorl-Thumbnail
* Database migrations with South
* Debugging functionality with Drupal Debug Toolbar
* And of course, indescpensable Django extensions and Django braces are included too!

Usage
===================
To use this project follow these steps:

#. Create your working environment
#. Install Django
#. Create the new project using the django-on-wings template
#. Install additional dependencies
#. Use the Django admin to create the project

*note: these instructions show creation of a project called "pony".  You
should replace this name with the actual name of your project.*

Working Environment
===================

You have several options in setting up your working environment.  We recommend
using virtualenv to separate the dependencies of your project from your system's
python environment.  If on Linux or Mac OS X, you can also use virtualenvwrapper to help manage multiple virtualenvs across different projects.

Virtualenv Only
---------------

First, make sure you are using virtualenv (http://www.virtualenv.org). Once
that's installed, create your virtualenv::

    $ virtualenv --distribute pony

You will also need to ensure that the virtualenv has the project directory
added to the path. Adding the project directory will allow `django-admin.py` to
be able to change settings using the `--settings` flag.

Virtualenv with virtualenvwrapper
------------------------------------

In Linux and Mac OSX, you can install virtualenvwrapper (http://virtualenvwrapper.readthedocs.org/en/latest/),
which will take care of managing your virtual environments and adding the
project path to the `site-directory` for you::

    $ mkdir pony
    $ mkvirtualenv -a pony pony-dev
    $ cd pony && add2virtualenv `pwd`

Installing Django
=================

To install Django in the new virtual environment, run the following command::

    $ pip install django

Creating your project
=====================

To create a new Django project called '**pony**' using
django-twoscoops-project, run the following command::

    $ django-admin.py startproject --template=https://github.com/timonweb/djow/archive/master.zip --extension=json,py,rst pony_project


Installation of Dependencies
=============================

Depending on where you are installing dependencies:

In development::

    $ pip install -r requirements/local.txt

For production::

    $ pip install -r requirements.txt

*note: We install production requirements this way because many Platforms as a
Services expect a requirements.txt file in the root of projects.*

Acknowledgements
================

- Many thanks to Audrey Roy and Daniel Greenfield for the book and django-twoscoops-project, django-twoscoops-project contributors, James Tauber and pinax project contributors.
