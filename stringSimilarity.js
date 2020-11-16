/**
 * Takes in two strings and returns how similiar they are via percentage.
 * Uses Dice's Coefficient.
 * @param {String} stringOne First string to be compared.
 * @param {String} stringTwo Second string to be compared.
 * @param {String} [trimByString] By default the two strings get all whitespace.
 * removed via a replacement call. This argument allows for custom string trimming
 * inside the funciton with regex or strings.
 * @param {Boolean} [caseSensitive] By default the comparison is case sensitive.
 * This argument can turn it off.
 * @returns {Integer} Percentage of how similiar the strings are.
 */
const stringSimilarity = (
  stringOne,
  stringTwo,
  { trimByString = /\s/g, caseSensitive = true },
) => {
  stringOne = stringOne.replace(trimByString, '')
  stringTwo = stringTwo.replace(trimByString, '')

  if (!caseSensitive) {
    stringOne = stringOne.toLowerCase()
    stringTwo = stringTwo.toLowerCase()
  }

  if (!stringOne.length && !stringTwo.length) return 1
  if (!stringOne.length || !stringTwo.length) return 0
  if (stringOne === stringTwo) return 1
  if (stringOne.length === 1 && stringTwo.length === 1) return 0
  if (stringOne.length < 2 || stringTwo.length < 2) return 0

  const firstBigrams = new Map()
  for (let i = 0; i < stringOne.length - 1; i++) {
    const bigram = stringOne.substring(i, i + 2)
    const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1

    firstBigrams.set(bigram, count)
  }

  let intersectionSize = 0
  for (let i = 0; i < stringTwo.length - 1; i++) {
    const bigram = stringTwo.substring(i, i + 2)
    const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0

    if (count > 0) {
      firstBigrams.set(bigram, count - 1)
      intersectionSize++
    }
  }

  return (2.0 * intersectionSize) / (stringOne.length + stringTwo.length - 2)
}

module.exports.stringSimilarity = stringSimilarity
