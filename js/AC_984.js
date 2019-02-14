/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    const res = [];
    let count = 0;

    function putA() {
        res.push('a');
        A--;
        count = res[res.length - 1] === res[res.length - 2] ? (count + 1) : 1;
    }

    function putB() {
        res.push('b');
        B--;
        count = res[res.length - 1] === res[res.length - 2] ? (count - 1) : -1;
    }

    while (A > 0 || B > 0) {
        if (A >= B) {
            if (count < 2) {
                putA();
            } else {
                putB();
            }
        }
        if (A < B) {
            if (count > -2) {
                putB();
            } else {
                putA();
            }
        }
    }

    return res.join('');
};
