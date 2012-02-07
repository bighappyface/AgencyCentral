AgencyCentral
========================

Thank you for your interest in Agency Central.

### Features

* **Symfony** - Server-side
* **ExtJS 4** - Client-side
* **MongoDB** - Persistence

1) Download
--------------------------------

If you've already downloaded the application, and unpacked it somewhere
within your web root directory, then move on to the "Installation" section.

To download the standard edition, you have two options:

### Download an archive file (*recommended*)

The easiest way to get started is to download an archive of the standard edition
(http://symfony.com/download). Unpack it somewhere under your web server root
directory and you're done. The web root is wherever your web server (e.g. Apache)
looks when you access `http://localhost` in a browser.

### Clone the git Repository

We highly recommend that you download the packaged version of this distribution.
But if you still want to use Git, you are on your own.

Run the following commands:

    git clone http://github.com/symfony/symfony-standard.git
    cd symfony-standard
    rm -rf .git

2) Installation
---------------

### a) Check your System Configuration

Before you begin, make sure that your local system is properly configured
for Symfony. To do this, execute the following:

    php app/check.php

If you get any warnings or recommendations, fix these now before moving on.

### b) Install the Vendor Libraries

If you downloaded the archive "without vendors" or installed via git, then
you need to download all of the necessary vendor libraries. If you're not
sure if you need to do this, check to see if you have a ``vendor/`` directory.
If you don't, or if that directory is empty, run the following:

    php bin/vendors install

Note that you **must** have git installed and be able to execute the `git`
command to execute this script. If you don't have git available, either install
it or download Symfony with the vendor libraries already included.