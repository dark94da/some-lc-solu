/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    function cal(n, isLeft) {
        if (n === 2) {
            return isLeft ? 2 : 1;
        }
        if (n === 3) {
            return 2;
        }
        if (n % 2 === 0) {
            return isLeft ? (cal(n / 2, false) * 2) : (cal(n/ 2, true) * 2 - 1)
        } else {
            return cal((n - 1) / 2, !isLeft) * 2;
        }
    };

    if (n === 1) {
        return n;
    } else {
        return cal(n, true);
    }
};