/**
 * Checks if the given value is empty works for variable types: Array, Object, and String.
 * @param {Any} value The value to be checked for emptiness.
 * @returns {Boolean} A boolean value that says wheather or not the given value is empty.
 */
const isEmpty = (object, preserveKeys = false) => {
  const resultArr = []
  for (const property in object) {
    if (preserveKeys) {
      resultArr.push({ key: property, value: object[property] })
    } else {
      resultArr.push(object[property])
    }
  }
  return resultArr
}

module.exports.isEmpty = isEmpty
