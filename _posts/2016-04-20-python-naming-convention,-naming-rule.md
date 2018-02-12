---
layout: post
title: "python naming convention, naming rule"
description: ""
date: 2016-04-20
tags: []
comments: true
share: true
---

**Naming**

  

module_name, package_name, ClassName, method_name, ExceptionName,
function_name, GLOBAL_CONSTANT_NAME, global_var_name, instance_var_name,
function_parameter_name, local_var_name.

  

**Names to Avoid**

  

single character names except for counters or iterators

dashes (-) in any package/module name

__double_leading_and_trailing_underscore__ names (reserved by Python)

  

**Naming Convention**

  

"Internal" means internal to a module or protected or private within a class.

  

Prepending a single underscore (_) has some support for protecting module
variables and functions (not included with import * from). Prepending a double
underscore (__) to an instance variable or method effectively serves to make
the variable or method private to its class (using name mangling).

  

Place related classes and top-level functions together in a module. Unlike
Java, there is no need to limit yourself to one class per module.

  

Use CapWords for class names, but lower_with_under.py for module names.
Although there are many existing modules named CapWords.py, this is now
discouraged because it's confusing when the module happens to be named after a
class. ("wait -- did I write import StringIO or from StringIO import
StringIO?")

  

Guidelines derived from Guido's Recommendations

  

Type Public Internal

  

Packages lower_with_under

  

Modules lower_with_under _lower_with_under

  

Classes CapWords _CapWords

  

Exceptions CapWords

  

Functions lower_with_under() _lower_with_under()

  

Global/Class Constants CAPS_WITH_UNDER _CAPS_WITH_UNDER

  

Global/Class Variables lower_with_under _lower_with_under

  

Instance Variables lower_with_under _lower_with_under (protected) or
__lower_with_under (private)

  

Method Names lower_with_under() _lower_with_under() (protected) or
__lower_with_under() (private)

  

Function/Method Parameters lower_with_under

  

Local Variables lower_with_under

  

Main

