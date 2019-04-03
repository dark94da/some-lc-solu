/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
    let res = 0;
    const line = A.length;
    if (line === 0) {
        return res;
    }
    const col = A[0].length;
    let count;
    for (let x = 0; x < line; x++) {
        for (let y = 0; y < col; y++) {
            count = 0;
            for (let i = x; i < line; i++) {
                for (let j = y; j < col; j++) {
                    if (A[i][j] === 1 && B[i - x][j - y] === 1) {
                        count += 1;
                    }
                }
            }
            if (count > res) {
                res = count;
            }
            count = 0;
            for (let i = 0; i < line - x; i++) {
                for (let j = 0; j < col - y; j++) {
                    if (A[i][j] === 1 && B[i + x][j + y] === 1) {
                        count += 1;
                    }
                }
            }
            if (count > res) {
                res = count;
            }
        }
    }
    return res;
};