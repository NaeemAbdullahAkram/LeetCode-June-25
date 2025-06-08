/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let nums = [];
    for(let i=1;i<=n;i++){
        nums.push(i.toString())
    }
    nums.sort()
    return nums.map(Number)
};