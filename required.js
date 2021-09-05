/**
 * Makes arguments required by setting the default value of an argument
 * to it's invocation.
 * @param {String} argName Name of required argument
 */
const required = (argName = 'Param') => {
  throw new Error(`${argName} is a required argument`)
}
