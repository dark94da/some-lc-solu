/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let res;
    const count = [];
    const k = nums.length;
    for (let i = 0; i < k; i++) {
        count.push(0);
    }

    const totalArr = [];
    const countArr = [];
    let min, minNum;
    while (true) {
        min = undefined;
        for (let i = 0; i < k; i++) {
            if (nums[i][0] === undefined) {
                continue;
            }
            min = (min !== undefined) ? ((nums[i][0] < nums[min][0]) ? i : min) : i;
        }
        if (min === undefined) {
            break;
        }
        minNum = nums[min].shift();
        if (totalArr[totalArr.length - 1] !== minNum) {
            totalArr.push(minNum);
            countArr.push([].concat(count));
        }
        count[min]++;
    }
    countArr.push([].concat(count));

    function containAllList(s, e) {
        for (let i = 0; i < k; i++) {
            if (countArr[e + 1][i] - countArr[s][i] < 1) {
                return false;
            }
        }
        return true;
    }

    function saveSolution(rangeStart, rangeEnd) {
        res = res ? ((rangeEnd - rangeStart < res[1] - res[0]) ?  [rangeStart, rangeEnd] : res) : [rangeStart, rangeEnd];
    }

    let start = 0;
    let end = 0;
    while (end < totalArr.length) {
        while (end < totalArr.length && !containAllList(start, end)) {
            end++;
        }
        if (end < totalArr.length) {
            saveSolution(totalArr[start], totalArr[end]);
        } else {
            break;
        }
        while (start < end && containAllList(start + 1, end)) {
            start++;
        }
        saveSolution(totalArr[start], totalArr[end]);
        start++;
    }
    return res;
};
