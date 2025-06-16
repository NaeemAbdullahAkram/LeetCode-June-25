/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let minNum = nums[0];
    let maxDif = 0;
    for(let i = 1; i < nums.length; i++){
        maxDif = Math.max(maxDif, nums[i] - minNum);
        minNum = Math.min(minNum, nums[i]);
    }

    return (maxDif > 0) ? maxDif : -1;
};