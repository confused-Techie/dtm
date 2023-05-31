/**
 * @function getDedupedArray
 * @desc Deduplicates the provided array, returning a new array without duplicates.
 * Works only on arrays of Strings, Numbers, Booleans.
 * @param {*[]} value - The Array to Deduplicate
 * @returns {*[]} Returns an array of values, deduplicated.
 */
exports.getDedupedArray = (value) => {
  let newArray = [];

  if (!Array.isArray(value)) {
    // Return an empty array if we don't receive an array
    return [];
  }

  for (let i = 0; i < value.length; i++) {
    if (!newArray.includes(value[i])) {
      newArray.push(value[i]);
    }
  }

  return newArray;
};
