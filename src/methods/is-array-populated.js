/**
 * @function isArrayPopulated
 * @description Determines not only if the input value is an array, but also if
 * contains any content.
 * @param {*} value - The value to inspect.
 * @returns {boolean} True if the provided input is an array, and has a length
 * longer than 0. False if either the input value is not an array, or has a length
 * of 0.
 */
exports.isArrayPopulated = (value) => {
  if (Array.isArray(value) && value.length > 0) {
    return true;
  } else {
    return false;
  }
};
