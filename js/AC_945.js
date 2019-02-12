/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let res = 0;

    function qsort(s, e, A) {
        if (s >= e) {
            return;
        }
        let key = A[s];
        let i = s;
        let j = e;
        while (i < j) {
            while (j > i && A[j] >= key) {
                j--;
            }
            if (j > i) {
                A[i] = A[j];
                i++;
            }
            while (j > i && A[i] <= key) {
                i++;
            }
            if (j > i) {
                A[j] = A[i];
                j--;
            }
        }
        A[i] = key;
        arguments.callee(s, i - 1, A);
        arguments.callee(i + 1, e, A);
    }

    qsort(0, A.length - 1, A);
    const numberSet = {};
    const repArr = [];
    const uniqArr = [];
    for (let i = 0; i < A.length; i++) {
        if (numberSet[A[i]]) {
            repArr.push(A[i]);
        } else {
            numberSet[A[i]] = true;
            uniqArr.push(A[i]);
        }
    }

    let idx = 0;
    for (let i = 1; i < uniqArr.length; i++) {
        for (let j = uniqArr[i - 1] + 1; j < uniqArr[i]; j++) {
            if (j < repArr[idx]) {
                break;
            }
            res += j - repArr[idx];
            idx++;
            if (idx >= repArr.length) {
                break;
            }
        }
        if (idx >= repArr.length) {
            break;
        }
    }
    let last = uniqArr.pop() + 1;
    for (let i = idx; i < repArr.length; i++) {
        res += last - repArr[i];
        last++;
    }
    return res;
};
