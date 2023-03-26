// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        result += Math.pow(26, i) * (columnTitle.charCodeAt(columnTitle.length - 1 - i) - 64);
    }
    return result;
};