/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let resWidth = 0;
    const col = matrix[0].length;
    const line = matrix.length;
    const sum = [[parseInt(matrix[0][0], 10)]];
    for (let i = 1; i < col; i++) {
        sum[0][i] = sum[0][i -1] + parseInt(matrix[0][i], 10);
    }
    for (let i = 1; i < line; i++) {
        sum[i] = [sum[i - 1][0] + parseInt(matrix[i][0], 10)];
        for (let j = 1; j < col; j++) {
            sum[i].push(sum[i][j - 1] + sum[i - 1][j] - sum[i - 1][j - 1] + parseInt(matrix[i][j], 10));
        }
    }

    function testAllOne(x, y, width) {
        if (x + width - 1 >= line) {
            return false;
        }
        let lPart, rPart, mPart;
        lPart = y > 0 ? sum[x + width - 1][y - 1] : 0;
        rPart = x > 0 ? sum[x - 1][y + width - 1] : 0;
        mPart = (x > 0 && y > 0) ? sum[x - 1][y - 1] : 0;
        return (sum[x + width - 1][y + width - 1] - lPart - rPart + mPart) === (width ** 2);
    }

    for (let i = 0; i< line; i++) {
        let j = 0;
        while (j < col) {
            let w = 1;
            while (j + w - 1 < col && matrix[i][j + w - 1] === '1' && testAllOne(i, j, w)) {
                if (w > resWidth) {
                    resWidth = w;
                }
                w += 1;
            }
            if (j + w - 1 < col && matrix[i][j + w - 1] === 0) {
                j = j + w;
            } else {
                j += 1;
            }
        }
    }

    return resWidth ** 2;

};
