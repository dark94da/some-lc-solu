/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.startNode = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const letterArr = word.split('');
    let currentNode = this.startNode;
    let currentChar;
    for (let i = 0; i < letterArr.length; i++) {
        currentChar = letterArr[i];
        if (currentNode[currentChar] === undefined) {
            currentNode[currentChar] = {};
            currentNode = currentNode[currentChar];
        } else {
            currentNode = currentNode[currentChar];
        }
    }
    currentNode['end'] = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const letterArr = word.split('');
    let currentNode = this.startNode;
    let currentChar;
    for (let i = 0; i < letterArr.length; i++) {
        currentChar = letterArr[i];
        if (currentNode[currentChar] !== undefined) {
            currentNode = currentNode[currentChar];
        } else {
            return false;
        }
    }
    return !!currentNode['end'];
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const letterArr = prefix.split('');
    let currentNode = this.startNode;
    let currentChar;
    for (let i = 0; i < letterArr.length; i++) {
        currentChar = letterArr[i];
        if (currentNode[currentChar] !== undefined) {
            if (i === letterArr.length - 1) {
                break;
            }
            currentNode = currentNode[currentChar];
        } else {
            return false;
        }
    }
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        if (currentNode[String.fromCharCode(i)] !== undefined) {
            return true;
        }
    }
    return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// var obj = new Trie();
// obj.insert('test');
// console.log(obj.search('test'));
// console.log(obj.startsWith('te'));