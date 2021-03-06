---
layout: post
title: "Amazon S3 has two types of redirects"
description: ""
categories : development
sub_categories : ""
date: 2015-10-13
tags: []
comments: true
share: true
---

In the time between when I read up on S3 redirects and when I published a post
on what I had learned, Amazon created a second way to redirect parts of S3
websites.

  

The first way redirects a single URL at a time. These are the redirects I
already knew about, which were introduced last October. They are created by
attaching a special piece of metadata to an S3 object.

  

The second way was introduced in December, and redirects based on prefix. This
is probably most useful for redirecting entire folders. You can either rewrite
a folder name, preserving the rest of the URL, or redirect the entire folder
to a single URL. This kind of redirect is created by uploading an XML document
containing all of the redirect rules. You can create and upload the XML,
without actually seeing any XML, by descending through boto’s hierarchy until
you find boto.s3.bucket.Bucket.configure_website.

  

출처 : http://nathangrigg.net/2013/02/s3-redirects-again/

  

스택오버플로우 질문 : http://stackoverflow.com/questions/24521396/map-aws-s3-bucket-to-
no-subdomain-no-www-nothing

