/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const count = [1];
    let curSum;
    for (let i = 1; i <= n; i++) {
        curSum = 0;
        for (let j = 1; j <= i; j++) {
            curSum += count[j - 1] * count[i - j];
        }
        count.push(curSum);
    }
    return count[n];
};