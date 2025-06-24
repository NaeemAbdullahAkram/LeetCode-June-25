/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    
    let arr = [];
    let i = 0;

    for(let j=0; j<nums.length; j++){
        if(nums[j]===key){
            for(i; i<nums.length;i++){
                let indices = Math.abs(i-j);
                if(indices<=k){
                    arr.push(i);
                }else if(i>j && indices>k){
                    break;
                }
            }
        }
    }
    return arr;
};