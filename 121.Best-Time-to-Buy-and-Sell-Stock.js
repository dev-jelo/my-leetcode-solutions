// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let i = prices.length - 1;
    let salePrice = prices[i];
    while(i >= 0) {
        if (prices[i] > salePrice) salePrice = prices[i];
        if (salePrice - prices[i] > profit) profit = salePrice - prices[i];
        i--;
    }
    return profit;
};