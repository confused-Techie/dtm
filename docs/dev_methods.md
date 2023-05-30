When creating new methods there's a few guidelines that should be followed to ensure everything is cohesive.

## Overview

* Each method should only every use `camelCase`
* The filename of the method should be `kebab-case`
* One method per file
* One test file per method

## Naming

In general the Microsoft PowerShell Verb list should be followed for what each method does.

But there are exceptions, but as for the ongoing list:

* `is`: Implies that, without modifying the object, it's state, or an aspect of it's state will be returned.
* `get`: Implies that, without modifying the object, an aspect of it's state or data will be utilized to derive meaning from.
* 
