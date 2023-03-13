// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  outer:
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] == needle[0]) {
          for (let j = 0; j < needle.length; j++) {
              if (haystack[i + j] !== needle[j]) {
                  continue outer;
              }
          }
          return i;
      }
  }
  return -1;
};