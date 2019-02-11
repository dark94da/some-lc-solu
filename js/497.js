/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects;
    this.pointNums = rects.map(rect => (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1));
    this.totalNums = this.pointNums.reduce((sum, num) => sum + num, 0);
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    const pointIndex = Math.floor(Math.random() * this.totalNums) + 1;
    let rectIndex = 0;
    while (pointIndex - this.pointNums[rectIndex] > 0
    const x = rect[0] + Math.floor(Math.random() * (rect[2] - rect[0] + 1));
    const y = rect[1] + Math.floor(Math.random() * (rect[3] - rect[1] + 1));
    return [x, y];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(rects)
 * var param_1 = obj.pick()
 */

var obj = new Solution([[1, 1, 5, 5]]);
obj.pick();