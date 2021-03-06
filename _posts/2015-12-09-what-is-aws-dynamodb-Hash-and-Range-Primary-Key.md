---
layout: post
title: "What is aws dynamodb Hash and Range Primary Key? 다이나모디비 해쉬&레인지"
description: ""
categories : etc
sub_categories : ""
date: 2015-12-09
tags: []
comments: true
share: true
---

"**Hash and Range Primary Key**" means that a single row in DynamoDB has a
unique primary key made up of both the **hash **and the **range** key. For
example with a hash key of X and range key of Y, your primary key is
effectively XY. You can also have multiple range keys for the same hash key
but the combination must be unique, like XZ and XA. Let's use their examples
for each type of table:

  

> Hash Primary Key – The primary key is made of one attribute, a hash
attribute. For example, a ProductCatalog table can have ProductID as its
primary key. DynamoDB builds an unordered hash index on this primary key
attribute.  

This means that every row is keyed off of this value. **Every row in DynamoDB
will have a required, unique value for this attribute**. Unordered hash index
means what is says - the data is not ordered and you are not given any
guarantees into how the data is stored. **You won't be able to make queries on
an unordered index*(주요)** such as Get me all rows that have a ProductID
greater than X. You write and fetch items based on the hash key. For example,
Get me the row from that table that has ProductID X. You are making a query
against an unordered index so your gets against it are basically key-value
lookups, are very fast, and use very little throughput.

  

> Hash and Range Primary Key – The primary key is made of two attributes. The
first attribute is the hash attribute and the second attribute is the range
attribute. For example, the forum Thread table can have ForumName and Subject
as its primary key, where ForumName is the hash attribute and Subject is the
range attribute. DynamoDB builds an unordered hash index on the hash attribute
and a sorted range index on the range attribute.

This means that every row's primary key is the combination of the hash and
range key. You can make direct gets on single rows if you have both the hash
and range key, or you can make a query against the sorted range index. For
example, get Get me all rows from the table with Hash key X that have range
keys greater than Y, or other queries to that affect. They have better
performance and less capacity usage compared to Scans and Queries against
fields that are not indexed. From [their documentation](http://docs.aws.amazon
.com/amazondynamodb/latest/developerguide/QueryAndScan.html):

  

> Query results are always sorted by the range key. If the data type of the
range key is Number, the results are returned in numeric order; otherwise, the
results are returned in order of ASCII character code values. By default, the
sort order is ascending. To reverse the order, set the ScanIndexForward
parameter to false  

  

