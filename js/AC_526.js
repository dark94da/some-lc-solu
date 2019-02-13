/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    let capArr = [];
    let capNum;
    for (let i = 1; i <= N; i++) {
        capNum = [];
        for (let j = 1; j <= N; j++) {
            if (j % i === 0 || i % j === 0) {
                capNum.push(j);
            }
        }
        capArr.push(capNum);
    }

    let usedNum = {};
    let res = 0;
    function putNumber(idx) {
        if (idx === N) {
            res += 1;
            return;
        }
        let capNums = capArr[idx];
        for (let i = 0; i < capNums.length; i++) {
            if (usedNum[capNums[i]]) {
                continue;
            }
            usedNum[capNums[i]] = true;
            arguments.callee(idx + 1);
            usedNum[capNums[i]] = false;
        }
    }

    putNumber(0);
    return res;
};