/**
 * @function getRoughObjectSize
 * @desc Determines the rough size of the object in memory, in bytes.
 * @param {*} value - The value to inspect.
 * @returns {integer} Returns the integer value of the object in bytes.
 */
exports.getRoughObjectSize = (value) => {
  let objectList = [];
  let stack = [value];
  let bytes = 0;

  let typeDict = {
    boolean: 4,
    number: 8,
    char: 2,
  };

  while (stack.length) {
    let val = stack.pop();

    if (typeof val === "string") {
      bytes += val.length * typeDict.char;
    } else if (typeof val === "object" && objectList.indexOf(val) === -1) {
      objectList.push(val);
      for (let i in val) {
        stack.push(val[i]);
      }
    } else {
      bytes += typeDict[typeof val];
    }
  }
  return bytes;
};
