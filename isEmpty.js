/**
 * Checks if the given value is empty works for all data types.
 * @param {Any} value The value to be checked for emptiness.
 * @returns {Boolean} A boolean value that says wheather or not the given value is empty.
 */
const isEmpty = (value) => {
  if(typeof value === 'number') {
    return value !== 0 ? false: true
  } else if (typeof value === 'boolean') {
    return !value
  }
  else if (typeof value === 'string' || (Array.isArray(value))) {
    return value.length > 0 ? false : true
  } else if (typeof value === 'object') {
    return Object.keys(value).length > 0 ? false : true 
  }
}

module.exports.isEmpty = isEmpty