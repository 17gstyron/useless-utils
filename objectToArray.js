/**
 * Converts an obeject into an array.
 * @param {Array} array Array to be converted into object.
 * @param {string} [propertyName] Optional arguement if given array is
 * an array of objects. You can use a unique property that is on every
 * object as the keys for the new object.
 * @returns {Object} An object built with elements from the array given.
 */
const objectToArray = (object) => {
  const resultArr = []
  for (const property in object) {
    resultArr.push(object[property])
  }
  return resultArr
}

module.exports.objectToArray = objectToArray

console.log(objectToArray({ car: 'blue', age: 17, name: 'green' }))
