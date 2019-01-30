/**
 * @param {number} N
 */
var ExamRoom = function(N) {
    this.chairNum = N;
    this.chairArr = [];
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    if (this.chairArr.length === 0) {
        this.chairArr.push(0);
        return 0;
    }
    const chairArr = this.chairArr;
    let maxDis = -1;
    let chairIndex = 0;
    let nextChairNum = 0;
    if (chairArr[0] - 1 > maxDis) {
        maxDis = chairArr[0] - 1;
        chairIndex = -1;
        nextChairNum = 0;
    }
    for (let i = 0; i < chairArr.length - 1; i++) {
        if (Math.floor((chairArr[i + 1] - chairArr[i]) / 2) - 1 > maxDis) {
            maxDis = Math.floor((chairArr[i + 1] - chairArr[i]) / 2) - 1;
            chairIndex = i;
            nextChairNum = Math.floor((chairArr[i + 1] + chairArr[i]) / 2);
        }
    }
    if (this.chairNum - chairArr[chairArr.length - 1] - 2 > maxDis) {
        maxDis = this.chairNum - chairArr[chairArr.length - 1] - 2;
        chairIndex = chairArr.length - 1;
        nextChairNum = this.chairNum - 1;
    }
    chairArr.splice(chairIndex + 1, 0, nextChairNum);
    return nextChairNum;
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    const chairIndex = this.chairArr.indexOf(p);
    this.chairArr.splice(chairIndex, 1);
};


/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = Object.create(ExamRoom).createNew(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */