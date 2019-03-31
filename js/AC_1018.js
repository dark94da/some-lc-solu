/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    const res = [];
    let cur = 0;
    for (let i = 0; i < A.length; i++) {
        cur = (cur << 1) % 10 + A[i];
        res.push(cur === 0 || cur === 5);
    }
    return res;
};
