/**
 * Converts an obeject into an array.
 * @param {Object} object Object to be converted into array.
 * @param {Boolean} [preserveKeys] A boolean value that will preserve
 *  keys by turning elements into objects and having properties for
 *  both keys and values.
 * @returns {Array} An array built with values of object given.
 */
const objectToArray = (object, preserveKeys = null) => {
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

module.exports.objectToArray = objectToArray
