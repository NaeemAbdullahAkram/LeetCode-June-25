var maxSubsequence = function(nums, k) {
    // Step 1: Pair each number with its index
    const arr = nums.map((n, i) => [n, i]);

    // Step 2: Sort by number in descending order
    arr.sort((a, b) => b[0] - a[0]);

    // Step 3: Take top k elements and Sort the selected elements by their original index
    let res = arr.slice(0, k).sort((a, b) => a[1] - b[1]);

    // Step 4: Return just the values
    return res.map(val => val[0]);
};