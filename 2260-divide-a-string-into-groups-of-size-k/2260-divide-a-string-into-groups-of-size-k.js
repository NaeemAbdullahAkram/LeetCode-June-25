/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let temp = "" //Group string.
    const res = []
    for (const letter of s){
        //Making group. 
        if (temp.length<k) temp+=letter
        //Adding group to res and starting new group.
        else {
            res.push(temp)
            temp=letter
        }
    }
    if (!temp) return res //No remainder.
    //Remainder filling.
    while (temp.length<k) temp+=fill
    res.push(temp)
    return res
};