/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    const startNode = {
        pass: 0,
    };
    let letterArr, currentNode, currentChar;
    strs.forEach(str => {
        letterArr = str.split('');
        currentNode = startNode;
        for (let i = 0; i < letterArr.length; i++) {
            currentChar = letterArr[i];
            if (currentNode[currentChar] === undefined) {
                currentNode[currentChar] = {
                    pass: 0,
                };
            }
            currentNode = currentNode[currentChar];
            currentNode.pass++;
        }
    });

    let globalMaxLen = 0;

    function travel(currentNode) {
        let maxLen = 0;
        let keys = Object.keys(currentNode);
        keys.forEach(key => {
            if (key !== 'pass') {
                maxLen = Math.max(travel(currentNode[key]), maxLen);
            }
        });
        if (currentNode.pass === 1) {
            maxLen++;
        } else {
            maxLen = 0;
        }
        globalMaxLen = Math.max(globalMaxLen, maxLen);
        return maxLen;
    }

    travel(startNode);
    return globalMaxLen > 0 ? globalMaxLen : -1;
};

console.log(findLUSlength([
    "abc", "bc"
]));