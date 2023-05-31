# Creating New Methods

When creating new methods there's a few guidelines that should be followed to ensure everything is cohesive.

## Overview

- Each method should only ever use `camelCase`.
- The filename of the method should be `kebab-case`.
- Only have one method per file.
- Only have one test file per method.

## Naming

In general the Microsoft PowerShell Verb list should be followed for what each method does.

But there are exceptions, but as for the ongoing list:

- `is`: Implies, that without modifying the object, it's state, or an aspect of it's state will be returned.
- `get`: Implies, that without modifying the object, an aspect of it's state or data will be utilized to derive meaning from.

## Exporting

When exporting the method it's recommended to use an Anonymous Function Export. But any of the following are supported:

### Anonymous Function Export

```javascript
exports.isDummy = () => {
  return true;
};
```

### Named Function Export

```javascript
function isDummy() {
  return true;
}

exports.isDummy;
```

### Named Module Export

```javascript
function isDummy() {
  return true;
}

module.exports = {
  isDummy,
};
```
