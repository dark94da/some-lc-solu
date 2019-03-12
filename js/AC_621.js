/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const times = {};
    tasks.forEach(task => { times[task] = times[task] === undefined ? 1 : times[task] + 1 });
    const taskArr = [];
    Object.keys(times).forEach(key => taskArr.push({ key, value: times[key] }));
    taskArr.sort((a, b) => b.value - a.value);

    const lastIdx = {};
    let res = 0;
    let temp;
    while (taskArr.length > 0) {
        if (taskArr.length <= n + 1) {
            let empty = 1;
            for (let i = 1; i < taskArr.length; i++) {
                if (taskArr[i].value === taskArr[i - 1].value) {
                    empty += 1;
                } else {
                    break;
                }
            }
            res += (taskArr[0].value - 1) * (n + 1) + empty;
            break;
        }
        for (let i = 0; i < taskArr.length; i++) {
            if (lastIdx[taskArr[i].key] === undefined || res - lastIdx[taskArr[i].key] > n) {
                lastIdx[taskArr[i].key] = res;
                taskArr[i].value -= 1;
                if (taskArr[i].value === 0) {
                    taskArr.splice(i, 1);
                } else {
                    let j;
                    temp = taskArr[i];
                    for (j = i + 1; j < taskArr.length; j++) {
                        if (taskArr[j].value > temp.value) {
                            taskArr[j - 1] = taskArr[j];
                        } else {
                            break;
                        }
                    }
                    taskArr[j - 1] = temp;
                }
                break;
            }
        }
        res += 1;
    }

    return res;
};
