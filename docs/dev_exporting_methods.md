When writing a new method, any of the following patterns will work just fine for exporting:

## Anonymous Function Export

```javascript
exports.isDummy = () => {
  return true;
};
```

## Named Function Export

```javascript
function isDummy() {
  return true;
}

exports.isDummy;
```

## Named Module Export

```javascript
function isDummy() {
  return true;
}

module.exports = {
  isDummy,
};
```
