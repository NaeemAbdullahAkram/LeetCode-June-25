var longestSubarray = function(nums) {
    const n = nums.length;
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;
    
    for (let right = 0; right < n; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left);
    }
    return maxLength;      
};