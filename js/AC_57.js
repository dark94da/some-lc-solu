/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

var insert = function(intervals, newInterval) {
    let res = [];
    let inserted = false;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i].end < newInterval.start) {
            res.push(intervals[i]);
            continue;
        }
        if (intervals[i].start > newInterval.end) {
            res.push(newInterval);
            res = res.concat(intervals.slice(i));
            inserted = true;
            break;
        }
        if (intervals[i].start < newInterval.start) {
            newInterval.start = intervals[i].start;
        }
        if (intervals[i].end > newInterval.end) {
            newInterval.end = intervals[i].end;
        }
    }
    if (!inserted) {
        res.push(newInterval);
    }
    return res;
};
