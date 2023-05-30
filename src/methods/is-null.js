/**
 * @function isNull
 * @memberof dtm
 * @desc Determines if the input value is `null`.
 * @param {*} value - The value to inspect.
 * @returns {boolean} Returns true if the value is null, returns false if the value
 * is any other valid data type, including `undefined` or other falsy values.
 */
exports.isNull = (value) => {
  if (value === null) {
    return true;
  } else {
    return false;
  }
};
