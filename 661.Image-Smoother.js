// An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let res = [];
    for (let i = 0; i < img.length; i++) {
        res.push(Array(img[i].length).fill(0))
    }
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[i].length; j++) {
            let sum = 0
            let count = 0
            for (let k = i - 1; k <= i + 1; k++) {
                for (let m = j - 1; m <= j + 1; m++) {
                    if (k >= 0 && k < img.length && m >= 0 && m < img[i].length) {
                        sum += img[k][m]
                        count++
                    }
                }
            }
            res[i][j] = Math.floor(sum / count)
        }
    }
    return res
};