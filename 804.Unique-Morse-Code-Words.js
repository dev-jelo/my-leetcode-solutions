// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

  let set = new Set()
  for (let i = 0; i < words.length; i++) {
    let wordMorse = ''
    for (let j = 0; j < words[i].length; j++) {
      wordMorse += morseCode[words[i][j].charCodeAt(0) - 97]
    }
    set.add(wordMorse)
  }
  return set.size
};