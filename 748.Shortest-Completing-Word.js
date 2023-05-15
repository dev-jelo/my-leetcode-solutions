// Given a string licensePlate and an array of strings words, find the shortest completing word in words.
// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const letters = {}
    licensePlate = licensePlate.match(/[A-Za-z]/g)
    for (let i = 0; i < licensePlate.length; i++) {
      if (letters[licensePlate[i].toLowerCase()]) {
        letters[licensePlate[i].toLowerCase()]++
      } else {
        letters[licensePlate[i].toLowerCase()] = 1
      }
    }
    let result = 'xxxxxxxxxxxxxxx'
    for (let i = 0; i < words.length; i++) {
      const curLetters = {...letters}
      for (let j = 0; j < words[i].length; j++) {
        if (curLetters[words[i][j]]) {
          if (curLetters[words[i][j]] === 1) {
            delete curLetters[words[i][j]]
          } else {
            curLetters[words[i][j]]--
          }
        }
      }
      if (!Object.keys(curLetters).length && words[i].length < result.length) {
        result = words[i]
      }
    }
    return result
  };