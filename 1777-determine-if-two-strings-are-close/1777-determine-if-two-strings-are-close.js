
var closeStrings = function(word1, word2) {

    let char1 = new Array(26).fill(0);
    let char2 = new Array(26).fill(0);

    for (let ch of word1) {
        char1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let ch of word2) {
        char2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        if ((char1[i] === 0 && char2[i] !== 0) || (char1[i] !== 0 && char2[i] === 0)) {
            return false;
        }
    }

    char1.sort((a, b) => a - b);
    char2.sort((a, b) => a - b);

    return JSON.stringify(char1) === JSON.stringify(char2);
};