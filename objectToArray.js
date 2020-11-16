/**
 * Converts an obeject into an array.
 * @param {Object} object Object to be converted into array.
 * @returns {Array} An array built with values of object given.
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
