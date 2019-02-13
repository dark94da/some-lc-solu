/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const d = dominoes.split('');
    const l = [];
    const r = [];
    for (let i = 0; i < d.length; i++) {
        l.push(undefined);
        r.push(undefined);
    }

    let lastIdx;
    for (let i = d.length -1; i >= 0; i--) {
        if (d[i] === '.' && lastIdx !== undefined) {
            l[i] = lastIdx - i;
        }
        if (d[i] === 'L') {
            lastIdx = i;
        }
        if (d[i] === 'R') {
            lastIdx = undefined;
        }
    }
    lastIdx = undefined;
    for (let i = 0; i < d.length; i++) {
        if (d[i] === '.' && lastIdx !== undefined) {
            r[i] = lastIdx - i;
        }
        if (d[i] === 'L') {
            lastIdx = undefined;
        }
        if (d[i] === 'R') {
            lastIdx = i;
        }
    }

    let sum;
    for (let i = 0; i < d.length; i++) {
        if (d[i] !== '.') {
            continue;
        }
        if (l[i] === undefined && r[i] === undefined) {
        } else if (l[i] !== undefined && r[i] === undefined) {
            d[i] = 'L';
        } else if (l[i] === undefined && r[i] !== undefined) {
            d[i] = 'R';
        } else {
            sum = l[i] + r[i];
            if (sum === 0) {
                continue;
            }
            d[i] = sum > 0 ? 'R' : 'L';
        }
    }
    return d.join('');
};
