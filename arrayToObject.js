/**
 * Converts an array into an object.
 * @param {Array} array Array to be converted into object.
 * @param {string} [propertyName] Optional arguement if array is array of objects. You can use a unique property that is on every object as the keys for the new object.
 * @returns {Object} An object built with elements from the array given.
 */
const arrayToObject = (array, propertyName) => {
  const resultObj = {}
  let index = 0
  array.forEach((element) => {
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
