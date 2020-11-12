/**
 * Converts an array of objects into an object of with nested using unique property names from each
 * @param {Array} arrayOfObjects Array of Objects to be converted into Object.
 * @param {string} propertyName Name of property that contains a unique string
 * or interger to use as property to access each object.
 * @returns {Object} An Object with nested objects from the orginal Array.
 */
const arrayToObjectConverter = (arrayOfObjects, propertyName) => {
  const resultObj = {};
  arrayOfObjects.forEach((object) => {
    if (resultObj[object[propertyName]]) {
      throw new Error(
        `There are multiple Objects in the array with the Property of ${propertyName}.`
      );
    }
    resultObj[object[propertyName]] = object;
  });
  return resultObj;
};

export default arrayToObjectConverter;

// TODO: make useable for any array not just an array of objects
