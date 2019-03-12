/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let res = 0;

    const uniqSet = new Set([2, 5, 6, 9]);
    const numList = [0, 1, 2, 5, 6, 8, 9];

    const queue = [];
    const uniqQueue = [];

    queue.push(0);
    uniqQueue.push(false);

    let cur, curUniq, next;
    while (queue.length > 0) {
        cur = queue.shift();
        curUniq = uniqQueue.shift();
        if (curUniq) {
            res += 1;
        }
        numList.forEach(num => {
            next = cur * 10 + num;
            if (next <= N && next > 0) {
                queue.push(next);
                uniqQueue.push(curUniq || uniqSet.has(num));
            }
        });
    }
    return res;
};
