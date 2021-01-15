/**
 * Makes arguments required by setting the default value of an arguement
 * to it's invocation.
 * @param {String} argName Name of required arguement
 */
const required = (argName = 'Param') => {
  throw new Error(`${argName} is a required arguement`)
}
