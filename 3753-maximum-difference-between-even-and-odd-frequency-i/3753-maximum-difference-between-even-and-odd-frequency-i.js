/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const freq={};
    for(let char of s) {
        freq[char]=(freq[char] || 0) + 1;
    }
    let oddfreqs=[];
    let evenfreqs=[];

    for( let count of Object.values(freq)) {
        if(count%2==0) {
            evenfreqs.push(count);
        } else {
            oddfreqs.push(count);
        }
    }
    const maxodd=Math.max(...oddfreqs);
    const mineven=Math.min(...evenfreqs);

    return maxodd - mineven;
};