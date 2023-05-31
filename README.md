# Data Type Methods

[![Tests](https://github.com/confused-Techie/dtm/actions/workflows/tests.yml/badge.svg)](https://github.com/confused-Techie/dtm/actions/workflows/tests.yml)
[![Standards](https://github.com/confused-Techie/dtm/actions/workflows/standards.yml/badge.svg)](https://github.com/confused-Techie/dtm/actions/workflows/standards.yml)

> A Collection of methods to operate against data types in JavaScript.

The goal of **Data Type Methods (DTM)** is to make common interactions with data types faster and simpler. While often the methods being exposed are achievable within a few lines of code, but nothing beats having repeatable and simple access to these same functions over and over.

If you'd like to add new methods, feel free to make a PR after reviewing the [docs](./docs/creating_new_methods.md)!

## API

<!--DO NOT TOUCH! Automatically handled by ./scripts/docs/generate.js -->
### module: `dtm`
Data Type Methods: A Collection of methods to operate against data types in JavaScript.
```javascript
const dtm = require("dtm");
```


### function: `getDedupedArray`
Deduplicates the provided array, returning a new array without duplicates.
Works only on arrays of Strings, Numbers, Booleans.

Parameters:

- `value` `<*>`: The Array to Deduplicate

Returns:

- `<*>`: Returns an array of values, deduplicated.


### function: `getRoughObjectSize`
Determines the rough size of the object in memory, in bytes.

Parameters:

- `value` `<*>`: The value to inspect.

Returns:

- `<integer>`: Returns the integer value of the object in bytes.


### function: `isArrayPopulated`
Determines not only if the input value is an array, but also if
contains any content.

Parameters:

- `value` `<*>`: The value to inspect.

Returns:

- `<boolean>`: True if the provided input is an array, and has a length
longer than 0. False if either the input value is not an array, or has a length
of 0.


### function: `isNull`
Determines if the input value is `null`.

Parameters:

- `value` `<*>`: The value to inspect.

Returns:

- `<boolean>`: Returns true if the value is null, returns false if the value
is any other valid data type, including `undefined` or other falsy values.
