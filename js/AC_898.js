/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function(A) {
    let res = 0;
    const numSet = new Set();
    const masterSet = new Set();
    let i = 2;
    while (i < 1000000000) {
        masterSet.add(i - 1);
        i *= 2;
    }
    let temp;
    let isMaster;
    while (A.length > 1) {
        temp = [];
        for (let j = 0; j < A.length; j++) {
            if (!numSet.has(A[j])) {
                numSet.add(A[j]);
                res++;
            }
            isMaster = masterSet.has(A[j]);
            while (temp.length > 0 && temp[temp.length - 1] === A[j]) {
                temp.pop();
            }
            temp.push(A[j]);
        }
        A = [];
        for (let j = 0; j < temp.length - 1; j++) {
            A.push(temp[j] | temp[j + 1]);
        }
    }

    if (A.length > 0 && !numSet.has(A[0])) {
        res++;
    }

    return res;
};
