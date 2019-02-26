/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
    const pos = [];
    let lastIdx = -1;
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] === 1) {
            lastIdx = i;
            pos[i] = i;
        } else {
            pos[i] = lastIdx;
        }
    }
    let start = pos[0];
    if (start === -1) {
        return [0, 2];
    }
    let end = start;
    let i, j, k, l, x;
    let len = A.length;
    while (A.length - end - 1 >= (end - start + 1) * 2) {
        for (x = 0; x < end - start + 1; x++) {
            if (A[len - 1 - x] !== A[end - x]) {
                break;
            }
        }
        if (x === end - start + 1) {
            l = len - 1 - end + start;
            j = pos[end + 1];
            k = j + end - start;
            if (k < l && pos[k + 1] === l) {
                for (x = 0; x < end - start + 1; x++) {
                    if (A[start + x] !== A[j + x]) {
                        break;
                    }
                }
                if (x === end - start + 1) {
                    return [end, k + 1];
                }
            }
        }
        end++;
    }
    return [-1, -1];
};

