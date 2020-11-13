/**
 * Converts an array of objects into an object of with nested using unique property names from each
 * @param {Array} arrayOfObjects Array of Objects to be converted into Object.
 * @param {string} propertyName Name of property that contains a unique string
 * or interger to use as property to access each object.
 * @returns {Object} An Object with nested objects from the orginal Array.
 */
const arrayToObject = (arrayOfObjects, propertyName) => {
  const resultObj = {}
  let index = 0
  arrayOfObjects.forEach((element) => {
    if (propertyName) {
      if (resultObj[element[propertyName]]) {
        throw new Error(
          `There are multiple Objects in the array with the Property of ${propertyName}.`,
        )
      }
      resultObj[element[propertyName]] = element
    } else {
      resultObj[index] = element
      index++
    }
  })
  return resultObj
}

module.exports.arrayToObject = arrayToObject
